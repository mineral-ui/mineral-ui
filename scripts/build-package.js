#! /usr/bin/env node
/* eslint-disable no-console */

const os = require('os');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const semver = require('semver');

// Configure the arguments parser and documentation
const argv = require('yargs')
  .option('label', {
    describe: 'Build a pre-release package with a custom version label'
  })
  .option('skip-git', {
    describe: 'Skip git commands. No commits, tags, etc.'
  })
  .usage('Usage: $0 [options]')
  .example('$0', 'Build a standard package.')
  .example(
    '$0 --label alpha',
    'Build a canary/prerelease package with label "alpha".  e.g. 0.1.0-alpha.0'
  )
  .example(
    '$0 --skip-git',
    'Build a package without committing or tagging anything.'
  )
  .help('h')
  .alias('h', 'help').argv;

const exec = (command) =>
  execSync(command, {
    stdio: 'inherit'
  });

console.log('\n\nBuilding package...');
const { label, skipGit } = argv;

// Read root package.json and get current package version
const packageJsonFile = path.resolve(__dirname, '../package.json');
const packageJsonData = fs.readJsonSync(packageJsonFile);
const { version: currentVersion } = packageJsonData;

// Determine next package version
let nextVersion;
if (label) {
  // Adjust pre-release version
  const bump = semver.prerelease(currentVersion) ? 'prerelease' : 'preminor';
  nextVersion = semver.inc(currentVersion, bump, label); // e.g. 0.1.0-alpha.0
} else {
  // Simply increment minor version until 1.0 milestone
  // Following the 1.0 milestone, this can be updated with something that
  // determines the version bump based on commit messages
  nextVersion = semver.inc(currentVersion, 'minor');
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
const hasChangelog = fs
  .readFileSync(gitStatusFile, { encoding: 'utf8' })
  .includes('CHANGELOG.md');
fs.removeSync(gitStatusFile);
// Only commit changelog if it has been updated/generated
if (hasChangelog && !skipGit) {
  exec('git add CHANGELOG.md');
  exec(`git commit -m "docs(changelog): ${nextVersion}"`);
}

// Restore original package.json
exec('mv -f _package.json package.json');

// Update version in package.json, commit and tag
exec(`npm version ${nextVersion} --no-git-tag-version`);
if (!skipGit) {
  const message = `chore(release): ${nextVersion}`;
  exec(`git add package.json`);
  exec(`git commit -m "${message}"`);
  exec(`git tag -a -f v${nextVersion} -m "${message}"`);
}

// Copy additional files to dist to be included in the npm package
exec('cp {README.md,LICENSE.md,CHANGELOG.md} dist');

// Create simplified package.json in dist
const updatedPackageJasonData = fs.readJsonSync(packageJsonFile);
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
  files: ['**', '!website', '!*.tgz'],
  dependencies: updatedPackageJasonData.dependencies,
  peerDependencies: updatedPackageJasonData.peerDependencies
};
const minimalPackageJsonFile = path.resolve(__dirname, '../dist/package.json');
fs.writeJsonSync(minimalPackageJsonFile, minimalPackageJsonData, {
  spaces: 2
});

// Create an installable package for local testing
exec('cd dist && npm pack');

console.log('Package built successfully.');
