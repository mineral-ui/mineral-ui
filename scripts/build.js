#! /usr/bin/env node
/* eslint-disable no-console */

const execSync = require('child_process').execSync;

const { NODE_ENV = 'production' } = process.env;

const exec = (command, env) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, env)
  });

// components es modules
console.log('\n\nBuilding ES modules...');
exec(
  'babel ./src/components --out-dir ./dist/es --ignore *.spec.js,*.template.js',
  {
    NODE_ENV
  }
);

// components cjs modules
console.log('\n\nBuilding CommonJS modules...');
exec(
  'babel ./src/components --out-dir ./dist --ignore *.spec.js,*.template.js',
  {
    BABEL_ENV: 'cjs',
    NODE_ENV
  }
);

// website umd
console.log('\n\nBuilding Website UMD...');
exec('webpack', {
  NODE_ENV,
  TARGET: 'website'
});

// flow definitions - not yet ready for public consumption
// console.log('\n\nCopying Flow Definitions...');
// exec(
//   'flow-copy-source -v -i "**/__tests__/**" -i "**/dist/**" -i "**/lib/**" -i "**/templates/**" ./src/components ./dist'
// );
