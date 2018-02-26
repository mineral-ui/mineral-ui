#!/bin/bash

# Generates and uploads Happo diffs for the differences between the base commit
# and current commit.

# Make the whole script fail on errors
set -eo pipefail

# Bail if this build isn't triggered by a PR
[ -z "$TRAVIS_PULL_REQUEST_SHA" ] && echo 'Not a a pull request' && exit 0

# Bail if the required environment variables are not defined
# This prevents the script from failing on PR's from repo forks
if [[ -z $GHE_TOKEN || -z $HAPPO_KEY || -z $HAPPO_SECRET ]]; then
  echo 'One or more environment variables were undefined.

  GHE_TOKEN
  HAPPO_KEY
  HAPPO_SECRET

Skipping Happo tests...'
  exit 0
fi

# Fail on unset variables
set -u pipefail

# The PREVIOUS_SHA will be equal to the commit that this PR is based on (which
# is usually some commit on the master branch). Travis gives us a range of
# commits. We need the first one.
PREVIOUS_SHA="${TRAVIS_COMMIT_RANGE//\.\..*/}"
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
if ! SUMMARY=$(npm run --silent happo compare "$PREVIOUS_SHA" "$CURRENT_SHA" \
  --link "$PR_URL" --message "$COMMIT_SUBJECT"); then
  MESSAGE="Message from Happo:

  $SUMMARY"

  echo "Attempting to post comment on ${PR_URL}: ${MESSAGE}"

  node scripts/postCommentOnPR.js "$MESSAGE"
fi
