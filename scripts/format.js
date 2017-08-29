#! /usr/bin/env node

/**
 * Script to inject license header into source files.
 */
const fs = require('fs');
const glob = require('glob');
const prependFile = require('prepend-file');
let license = require('../utils/license').licenseHeader;

license = `${license}\n`;

const files = glob.sync('**/*.js', {
  ignore: [
    '**/node_modules/**',
    '**/dist/**',
    '**/flow-typed/**',
    '**/lib/**',
    '**/reports/**',
    '**/scripts/**'
  ]
});

files.forEach(file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    if (!data.includes(license)) {
      const pre = data.includes('@flow')
        ? `${license}\n`
        : `${license}\n/* @flow */\n`;

      prependFile(file, pre, err => {
        if (err) {
          throw err;
        }
      });
    }
  });
});
