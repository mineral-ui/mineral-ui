#!/usr/bin/env node

const GithubApi = require('github');

// These env variables all need to be defined.
const { GHE_TOKEN, TRAVIS_REPO_SLUG, TRAVIS_PULL_REQUEST } = process.env;

// When invoked using `node postCommentOnPR.js "some message", the string we
// want is third in the list.
const body = process.argv[2];

const github = new GithubApi();

github.authenticate({
  type: 'token',
  token: GHE_TOKEN
});

const [owner, repo] = TRAVIS_REPO_SLUG.split('/');

// Post comment on PR. We're not going to fail or pass any build, we're just
// going to let them know if the PR resulted in any diffs. We do this because
// many changes have expected diffs, and we don't want to tell people that
// they've done something wrong.
github.pullRequests.createReview(
  {
    body,
    owner,
    repo,
    number: TRAVIS_PULL_REQUEST,
    event: 'COMMENT'
  },
  err => {
    if (err) {
      process.stderr.write(`Error: ${err}\n`);
      process.exit(1);
    }
  }
);
