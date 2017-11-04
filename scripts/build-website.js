#! /usr/bin/env node
/* eslint-disable no-console */

const execSync = require('child_process').execSync;

const { NODE_ENV = 'production' } = process.env;

const exec = (command, env) =>
  execSync(command, {
    stdio: 'inherit',
    env: { ...process.env, ...env }
  });

console.log('\n\nBuilding Website UMD...');
exec('webpack', {
  NODE_ENV,
  TARGET: 'website'
});
