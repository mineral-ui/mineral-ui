#! /usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs-extra');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const path = require('path');
const Mustache = require('mustache');

const THEMES_SRC_DIR = path.join(__dirname, '../src/themes');
const THEMES_OUT_DIR = THEMES_SRC_DIR;
const THEME_TEMPLATE_PATH = path.join(
  THEMES_SRC_DIR,
  'templates/theme.template.js'
);
const INDEX_TEMPLATE_PATH = path.join(
  THEMES_SRC_DIR,
  'templates/index.template.js'
);

// These values are chosen via `color_60` in the respective color ramps
// http://mineral-ui.com/color/#color-ramps
const themeColorTextOnPrimary = {
  blue: 'color.white',
  dusk: 'color.white',
  indigo: 'color.white',
  lime: 'color.black',
  purple: 'color.white',
  sky: 'color.black',
  slate: 'color.black',
  teal: 'color.black'
};

const themeColors = Object.keys(themeColorTextOnPrimary);

function buildThemes() {
  return readFile(THEME_TEMPLATE_PATH, 'utf8').then(template => {
    Mustache.parse(template);

    const promises = themeColors.map(color => generateTheme(template, color));
    return Promise.all(promises).then(themeNames => {
      return generateIndex(themeNames);
    });
  });
}

function generateTheme(template, color) {
  const themeName = `${color}Theme`;
  const themeFilePath = path.join(THEMES_OUT_DIR, `${themeName}.js`);

  const themeContent = Mustache.render(template, {
    color,
    color_text_onprimary: themeColorTextOnPrimary[color]
  });

  return fs
    .ensureFile(themeFilePath)
    .then(() => writeFile(themeFilePath, themeContent))
    .then(() => ({ themeName }));
}

function generateIndex(themeNames) {
  return readFile(INDEX_TEMPLATE_PATH, 'utf8').then(template => {
    const indexContent = Mustache.render(template, { themeNames });
    const indexFilePath = path.join(THEMES_OUT_DIR, 'index.js');

    return writeFile(indexFilePath, indexContent);
  });
}

console.log('Building themes...');
console.time('Done');

buildThemes()
  .then(() => {
    console.timeEnd('Done');
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
