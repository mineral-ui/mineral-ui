#! /usr/bin/env node
/* eslint-disable no-console */

const os = require('os');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const inquirer = require('inquirer');

// Configure the arguments parser and documentation
const argv = require('yargs')
  .option('npm-tag', {
    describe: 'Publish a release using a custom npm dist-tag',
    default: 'latest',
    type: 'string'
  })
  .option('skip-git', {
    describe: "Skip git commands. Don't push to GitHub"
  })
  .option('skip-npm', {
    describe: "Skip npm commands. Don't publish to npm"
  })
  .usage('Usage: $0 [options]')
  .example('$0', 'Perform a standard release')
  .example('$0 --npm-tag=next', 'Perform a release using npm dist-tag "next"')
  .example('$0 --skip-git', 'Skip push to GitHub.')
  .example('$0 --skip-npm', 'Skip publish to npm.')
  .help('h')
  .alias('h', 'help').argv;

const exec = (command) =>
  execSync(command, {
    stdio: 'inherit'
  });

const { npmTag, skipGit, skipNpm } = argv;

// Read dist/package.json and get package version
const packageJsonFile = path.resolve(__dirname, '../dist/package.json');
if (!fs.existsSync(packageJsonFile)) {
  console.log(
    `Unable to find ${packageJsonFile}. You must build a package first. Release aborted.`
  );
  process.exit(0);
}
const version = fs.readJsonSync(packageJsonFile).version;

// Check if version has previously been published
// Note: tmpfile used to get output from npm command
const npmVersionsFile = path.resolve(os.tmpdir(), '.npm-versions');
exec(`echo "$(npm show mineral-ui versions)" > ${npmVersionsFile}`);
const versionPreviouslyPublished = fs
  .readFileSync(npmVersionsFile, { encoding: 'utf8' })
  .includes(`'${version}'`);
fs.removeSync(npmVersionsFile);
if (versionPreviouslyPublished) {
  console.log(
    `Version ${version} has previously been published. Release aborted.`
  );
  process.exit(0);
}

// Publishing - prompt user for confirmation
inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `Ready to release ${version} using npm tag ${npmTag}?`
    }
  ])
  .then(({ confirm }) => {
    if (confirm) {
      // Publish to npm
      if (skipNpm) {
        console.log('Skipped publish to npm...');
      } else {
        console.log('Publishing to npm...');
        exec(`cd dist && npm publish --tag=${npmTag}`);
      }

      // Push commits and tags to GitHub
      if (skipGit) {
        console.log('Skipped push to GitHub...');
      } else {
        console.log('Pushing to GitHub...');
        exec('git push --follow-tags');
      }
    } else {
      console.log('Release aborted.');
    }
  });
