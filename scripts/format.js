#! /usr/bin/env node

const fs = require('fs');
const glob = require('glob');
const prependFile = require('prepend-file');

const files = glob.sync('**/*.js', {
  ignore: [
    '**/node_modules/**',
    '**/dist/**',
    '**/flow-typed/**',
    '**/lib/**',
    '**/reports/**',
    '**/scripts/**',
    'utils/setupTestFrameworkScript.js'
  ]
});

files.forEach((file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    if (!data.includes('@flow')) {
      prependFile(file, '/* @flow */\n', (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
});
