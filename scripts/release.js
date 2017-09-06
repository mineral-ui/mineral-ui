#! /usr/bin/env node
/* eslint-disable no-console */

const os = require('os');
const fse = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const semver = require('semver');
const inquirer = require('inquirer');

// Configure the arguments parser and documentation
const argv = require('yargs')
  .option('canary', {
    describe: 'Publish a pre-release canary version'
  })
  .option('npm-tag', {
    describe: 'Publish a release using a custom npm dist-tag',
    default: 'latest',
    type: 'string'
  })
  .usage('Usage: $0 [options]')
  .example('$0', 'perform a standard release')
  .example(
    '$0 --canary',
    'perform a canary/prerelease with label and npm dist-tag "alpha", e.g. 0.1.0-alpha.0'
  )
  .example(
    '$0 --canary=beta --npmTag=beta',
    'perform a canary/prerelease with label and npm dist-tag "beta", e.g. 0.1.0-beta.0'
  )
  .example('$0 --npmTag=next', 'perform a release using npm dist-tag "next"')
  .help('h')
  .alias('h', 'help').argv;

const exec = command =>
  execSync(command, {
    stdio: 'inherit'
  });

// Read root package.json and get current package version
const packageJsonFile = path.resolve(__dirname, '../package.json');
const packageJsonData = fse.readJsonSync(packageJsonFile);
const { version: currentVersion } = packageJsonData;

// Identify next package version - simply increment minor version until 1.0 milestone
// Following the 1.0 milestone, this can be updated with something that
// determines the version bump based on commit messages
let nextVersion = semver.inc(currentVersion, 'minor');

// Avoid publishing canary under latest npm-tag, default to alpha
const npmTag = argv.canary && argv.npmTag === 'latest' ? 'alpha' : argv.npmTag;

// Adjust canary version appropriately
if (argv.canary) {
  const label = typeof argv.canary === 'string' ? argv.canary : 'alpha';
  const bump = semver.prerelease(currentVersion) ? 'prerelease' : 'preminor';
  nextVersion = semver.inc(currentVersion, bump, label); // e.g. - 0.1.0-alpha.0
}

// Create a copy of the original package.json for restoration later
exec('cp package.json _package.json');

// Bump version in package.json, but do not commit or tag it
// This is necessary in order to generate a changelog with the appropriate version
exec(`npm --no-git-tag-version version ${nextVersion}`);

// Generate changelog
const changelogConfigFile = path.resolve(
  __dirname,
  '../utils/changelogConfig.js'
);
exec(
  `conventional-changelog --preset angular --infile CHANGELOG.md --same-file --config ${changelogConfigFile}`
);
// Check if a changelog has been generated
// Note: tmpfile used to get output from git status command
const gitStatusFile = path.resolve(os.tmpdir(), '.git-status');
exec(`echo "$(git status --porcelain)" > ${gitStatusFile}`);
const hasChangelog = fse
  .readFileSync(gitStatusFile, { encoding: 'utf8' })
  .includes('CHANGELOG.md');
fse.removeSync(gitStatusFile);
// Only commit changelog if it has been updated/generated
if (hasChangelog) {
  exec('git add CHANGELOG.md');
  exec(`git commit -m "docs(changelog): ${nextVersion}"`);
}

// Restore original package.json
exec('mv -f _package.json package.json');

// Update version in package.json, commit and tag
exec(`npm version ${nextVersion} -f -m "chore(release): ${nextVersion}"`);

// Copy additional files to dist to be included in the npm package
exec('cp {README.md,LICENSE.md,CHANGELOG.md} dist');

// Create simplified package.json in dist
const updatedPackageJasonData = fse.readJsonSync(packageJsonFile);
const minimalPackageJsonData = {
  name: updatedPackageJasonData.name,
  author: updatedPackageJasonData.author,
  description: updatedPackageJasonData.description,
  version: updatedPackageJasonData.version,
  license: updatedPackageJasonData.license,
  repository: updatedPackageJasonData.repository,
  bugs: updatedPackageJasonData.bugs,
  homepage: updatedPackageJasonData.homepage,
  main: './index.js',
  module: './es/index.js',
  files: ['**', '!website'],
  dependencies: updatedPackageJasonData.dependencies,
  peerDependencies: updatedPackageJasonData.peerDependencies
};
const minimalPackageJsonFile = path.resolve(__dirname, '../dist/package.json');
fse.writeJsonSync(minimalPackageJsonFile, minimalPackageJsonData, {
  spaces: 2
});

// Publishing - prompt user for confirmation
inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `Ready to release ${nextVersion} using npm tag ${npmTag}?`
    }
  ])
  .then(({ confirm }) => {
    if (confirm) {
      // Push commits and tags to GitHub
      console.log('Pushing to GitHub...');
      exec('git push -f --follow-tags');

      // Publish to npm
      console.log('Publishing to npm...');
      exec(`cd dist && npm publish --tag=${npmTag}`);
    } else {
      console.log('Release aborted.');
    }
  });
