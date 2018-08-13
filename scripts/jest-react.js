#! /usr/bin/env node
/* eslint-disable no-console */

const os = require('os');
const fse = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const semver = require('semver');

const argv = require('yargs')
  .option('version', {
    describe: 'Version of React to use',
    default: ['15.3.2', '15.4.2', '15.5.4', '15.6.2', '16.4.2'],
    type: 'string'
  })
  .array('version')
  .usage('Usage: $0 [options]')
  .example('$0', 'test using default React versions')
  .example('$0 --version=15.6.1', 'test using React 15.6.1')
  .help('h')
  .alias('h', 'help').argv;

const exec = (command) => {
  execSync(command, {
    stdio: 'inherit'
  });
};

const getCurrentVersion = () => {
  return fse.readJsonSync(
    path.resolve(__dirname, '../node_modules/react/package.json')
  ).version;
};

const installDependencies = (version) => {
  let dependencies;

  if (semver.satisfies(version, '15.0.0 - 15.4.x')) {
    dependencies = `react@${version} react-dom@${version} react-addons-test-utils@${version} enzyme-adapter-react-15.4`;
  } else if (semver.satisfies(version, '^15.5.0')) {
    dependencies = `react@${version} react-dom@${version} react-test-renderer@${version} enzyme-adapter-react-15`;
  } else if (semver.satisfies(version, '^16.0.0')) {
    dependencies = `react@${version} react-dom@${version} react-test-renderer@${version} enzyme-react-adapter-future`;
  }

  if (dependencies) {
    console.log(`Installing dependencies for React ${version}`);
    exec(`npm i --no-save ${dependencies}`);
  }
};

const restoreOriginalDependencies = () => {
  const originalVersion = packageJsonData.devDependencies.react;
  if (getCurrentVersion() !== originalVersion) {
    console.log('Restoring original dependencies');
    installDependencies(originalVersion);
    exec('npm prune');
    console.log('Done.');
  }
};

const packageJsonData = fse.readJsonSync(
  path.resolve(__dirname, '../package.json')
);

const targetVersions = argv.version;
const supportedVersionRange = packageJsonData.peerDependencies.react;
const validReactVersions = (() => {
  const reactVersionsFile = path.resolve(os.tmpdir(), 'react-versions.json');
  exec(`echo "$(npm show react versions --json)" > ${reactVersionsFile}`);
  const reactVersions = fse.readJsonSync(reactVersionsFile);
  fse.removeSync(reactVersionsFile);
  return reactVersions;
})();

process.on('exit', restoreOriginalDependencies);

console.log(`Running tests for React versions: ${targetVersions.join(' ')}`);

targetVersions.forEach((targetVersion) => {
  if (!semver.valid(targetVersion)) {
    console.log('Invalid semver version:', targetVersion);
    process.exit(0);
  }

  if (!semver.satisfies(targetVersion, supportedVersionRange)) {
    const isPrerelease = semver.prerelease(targetVersion);
    const baseVersion = targetVersion.split('-')[0];
    const isInRangePrerelease =
      isPrerelease && semver.satisfies(baseVersion, supportedVersionRange);
    if (!isInRangePrerelease) {
      console.log('Unsupported React version');
      process.exit(0);
    }
  }

  if (semver.satisfies(targetVersion, '15.5.0 - 15.5.3')) {
    console.log(`Deprecated React version, updating to next stable version`);
    targetVersion = '15.5.4';
  }

  if (!validReactVersions.includes(targetVersion)) {
    console.log('Invalid React version:', targetVersion);
    process.exit(0);
  }

  if (getCurrentVersion() !== targetVersion) {
    installDependencies(targetVersion);
  }

  console.log(`Running tests for React ${targetVersion}`);
  exec(`npm run jest`);
});
