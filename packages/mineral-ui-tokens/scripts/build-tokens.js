#! /usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const theo = require('theo');
const formats = require('./formats');
const keys = require('./keys');
const colorIndex = require('../tokens/palette');

const MINERAL_TOKENS_DIR = path.join(__dirname, '../tokens');
const MINERAL_TOKENS_COLORS_DIR = path.join(MINERAL_TOKENS_DIR, '/palette');
const SRC_DIR = path.join(__dirname, '../src');
const WEBSITE_DIR = path.join(__dirname, '../../../src/website/app');

const args = process.argv.slice(2);

if (!fs.existsSync(SRC_DIR)) {
  fs.mkdirSync(SRC_DIR);
}

theo.registerFormat('colorAliases.js', formats.colorAliases);
theo.registerFormat('colorExport.js', formats.colorExport);
theo.registerFormat('defaultExport.js', formats.defaultExport);
theo.registerFormat('categorizedJsExports.js', formats.categorizedJsExports);
theo.registerFormat(
  'categorizedSassExports.js',
  formats.categorizedSassExports
);
theo.registerFormat('index.js', formats.index);
theo.registerFormat('mnrlScss', formats.mnrlScss);
theo.registerFormat('namedExports.js', formats.namedExports);

theo.registerValueTransform(
  'addQuotes',
  (prop) => typeof prop.get('value') === 'string',
  (prop) => `'${prop.get('value')}'`
);

// Necessary because theo will wrap quotes around an aliased value
theo.registerValueTransform(
  'fontWeight',
  (prop) => prop.get('name').includes('fontWeight'),
  (prop) => parseInt(prop.get('value').replace(/'/g, ''))
);

theo.registerTransform('js', ['addQuotes', 'fontWeight']);

const configurations = [
  {
    // Tokens
    transform: {
      file: path.join(MINERAL_TOKENS_DIR, 'tokens.json'),
      type: 'js'
    },
    format: { type: 'defaultExport.js' },
    fileName: 'tokens.js'
  },
  {
    // Just the color palette
    transform: {
      file: path.join(MINERAL_TOKENS_COLORS_DIR, 'index.json'),
      type: 'js'
    },
    format: { type: 'defaultExport.js' },
    fileName: 'palette.js'
  },
  {
    // Tokens and palette
    transform: {
      file: path.join(MINERAL_TOKENS_DIR, 'tokensAndPalette.json'),
      type: 'js'
    },
    format: { type: 'namedExports.js' },
    fileName: 'all.js'
  },
  {
    // Tokens and palette, in Sass
    transform: {
      file: path.join(MINERAL_TOKENS_DIR, 'tokensAndPalette.json')
    },
    format: { type: 'mnrlScss' },
    fileName: 'index.scss'
  },
  {
    // Index
    transform: {
      file: path.join(MINERAL_TOKENS_DIR, 'tokensAndPalette.json')
    },
    format: { type: 'index.js' },
    fileName: 'index.js'
  },
  {
    // Grouped JS tokens by category
    transform: {
      file: path.join(MINERAL_TOKENS_DIR, 'tokensAndPalette.json'),
      type: 'js'
    },
    format: { type: 'categorizedJsExports.js' },
    fileName: 'categorizedJsTokens.js',
    writeDir: WEBSITE_DIR
  },
  {
    // Grouped Sass tokens by category
    transform: {
      file: path.join(MINERAL_TOKENS_DIR, 'tokensAndPalette.json'),
      type: 'js'
    },
    format: { type: 'categorizedSassExports.js' },
    fileName: 'categorizedSassTokens.js',
    writeDir: WEBSITE_DIR
  },
  {
    // All tokens with color values
    transform: {
      file: path.join(MINERAL_TOKENS_DIR, 'tokens.json')
    },
    format: { type: 'colorAliases.js' },
    fileName: 'colorAliases.js'
  }
];

// Each color
keys.colors.forEach((color) => {
  const data = {
    ...colorIndex,
    props: colorIndex.props.filter((prop) => prop.name.includes(color))
  };

  configurations.push({
    transform: {
      data: JSON.stringify(data),
      file: path.join(MINERAL_TOKENS_COLORS_DIR, `${color}.json`),
      type: 'js'
    },
    format: { type: 'colorExport.js' },
    fileName: `${color}.js`
  });
});

if (args.includes('--debug')) {
  configurations.push({
    transform: {
      type: 'web',
      file: path.join(MINERAL_TOKENS_DIR, 'tokensAndPalette.json')
    },
    format: {
      type: 'raw.json'
    },
    fileName: 'allTokens-debug.log'
  });
}

configurations.forEach(
  ({ transform, format, fileName, writeDir = SRC_DIR }) => {
    theo
      .convert({ transform, format })
      .then((result) => {
        fs.writeFile(
          path.join(writeDir, fileName),
          result,
          (error) => error && console.log('Error writing file: ', error)
        );
      })
      .catch(
        (error) => error && console.log('Error converting tokens: ', error)
      );
  }
);
