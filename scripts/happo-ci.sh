#!/bin/bash

# Generates and uploads Happo diffs for the differences between the base commit
# and current commit.

# Make the whole script fail on errors
set -eo pipefail

# Bail if the required environment variables are not defined
# This prevents the script from failing on PR's from repo forks
if [[ -z $HAPPO_KEY || -z $HAPPO_SECRET ]]; then
  echo 'One or more environment variables were undefined.

  HAPPO_KEY
  HAPPO_SECRET

Skipping Happo tests...'
  exit 0
fi

npm run --silent happo-ci-travis
