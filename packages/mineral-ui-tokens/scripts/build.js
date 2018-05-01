#! /usr/bin/env node
/* eslint-disable no-console */

const execSync = require('child_process').execSync;
const path = require('path');
const fse = require('fs-extra');

const { NODE_ENV = 'production' } = process.env;

const exec = (command, env) =>
  execSync(command, {
    stdio: 'inherit',
    env: { ...process.env, ...env }
  });

// components es modules
console.log('\n\nBuilding ES modules...');
exec('babel ./src --out-dir ./dist/es', {
  NODE_ENV
});

// components cjs modules
console.log('\n\nBuilding CommonJS modules...');
exec('babel ./src --out-dir ./dist', {
  BABEL_ENV: 'cjs',
  NODE_ENV
});

// Prepare flat package
const packageJsonFile = path.resolve(__dirname, '../package.json');
const packageJasonData = fse.readJsonSync(packageJsonFile);

const minimalPackageJsonData = {
  ...packageJasonData,
  devDependencies: undefined,
  files: ['**'],
  main: './index.js',
  module: './es/index.js',
  private: undefined,
  scripts: undefined
};

const minimalPackageJsonFile = path.resolve(__dirname, '../dist/package.json');
fse.ensureFileSync(minimalPackageJsonFile);
fse.writeJsonSync(minimalPackageJsonFile, minimalPackageJsonData, {
  spaces: 2
});

exec('cp {README.md,LICENSE.md,src/index.scss} dist');
