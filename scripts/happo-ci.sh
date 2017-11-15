#!/bin/bash

# Generates and uploads Happo diffs for the differences between the base commit
# and current commit.

# Make the whole script fail on errors
set -euo pipefail

# Bail if this build isn't triggered by a PR
[ -z "$TRAVIS_PULL_REQUEST_SHA" ] && echo 'Not a a pull request' && exit 0

# Travis gives us a range of commits. We need the first one so that we can grab
# the one it is based on.
FIRST_SHA_IN_RANGE="${TRAVIS_COMMIT_RANGE//\.\..*/}"

# The PREVIOUS_SHA will be equal to the commit that this PR is based on (which
# is usually some commit on the master branch).
PREVIOUS_SHA="$(git rev-parse "$FIRST_SHA_IN_RANGE"^)"
CURRENT_SHA="${TRAVIS_PULL_REQUEST_SHA}"

# Construct a URL to the PR so that we can link the happo reports to it
PR_URL="https://github.com/${TRAVIS_REPO_SLUG}/pull/${TRAVIS_PULL_REQUEST}"

echo "Previous SHA: ${PREVIOUS_SHA}"
echo "Current SHA: ${CURRENT_SHA}"
echo "PR URL: ${PR_URL}"

run-happo() {
  SHA=$1
  git checkout --quiet "$SHA"
  COMMIT_SUBJECT="$(git show -s --format=%s)"

  # Install dependencies (again, since we're potentially in a different place in
  # git history)
  npm install

  if npm ls happo.io; then
    npm run --silent happo run "$SHA" \
      --link "${PR_URL}" \
      --message "${COMMIT_SUBJECT}"
  else
    echo "NPM package happo.io not installed. Assuming this is the first run."
  fi
}

# Check if we need to generate a baseline. In some cases, the baseline is
# already there (some other PR uploaded it), and we can just use the existing
# one.
if ! npm run --silent happo has-report "$PREVIOUS_SHA"; then
  echo "No previous report found for ${PREVIOUS_SHA}. Generating one..."
  run-happo "$PREVIOUS_SHA"
fi

run-happo "$CURRENT_SHA"

# Compare reports from the two SHAs.
COMMIT_SUBJECT="$(git show -s --format=%s)"
SUMMARY=$(npm run --silent happo compare "$PREVIOUS_SHA" "$CURRENT_SHA" \
  --link "$PR_URL" --message "$COMMIT_SUBJECT" || true)

MESSAGE="Message from Happo:

$SUMMARY"

echo "Attempting to post comment on ${PR_URL}: ${MESSAGE}"

node scripts/postCommentOnPR.js "$MESSAGE"
