/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
