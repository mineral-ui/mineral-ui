/* @flow */
const { DEBUG, BABEL_ENV, HAPPO, NODE_ENV, TARGET } = process.env;
const isProduction = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';
const isHappo = HAPPO === 'true';

/**
 * Plugins run before presets.
 * Plugins run first to last.
 * Presets run last to first.
 *
 * https://babeljs.io/docs/plugins/#plugin-preset-ordering
 */

const config = {
  presets: (() => {
    let presets = [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 1 version']
          },
          useBuiltIns: TARGET === 'website' ? 'entry' : false,
          loose: true,
          modules:
            BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false,
          debug: Boolean(DEBUG)
        }
      ],
      '@babel/preset-react',
      '@babel/preset-flow'
    ];

    if (!isTest && !isHappo) {
      presets.push([
        '@emotion/babel-preset-css-prop',
        {
          sourceMap: !isProduction
        }
      ]);
    }

    return presets;
  })(),
  plugins: (() => {
    let plugins = [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import'
    ];

    if (TARGET !== 'icons') {
      // TARGET=icons is used when building mineral-ui-icons
      // mineral-ui package built using local paths - not dependent on mineral-ui-icons package
      // mineral-ui-icons package built using actual npm package name - dependent on mineral-ui package
      plugins.push([
        'module-resolver',
        {
          alias: {
            'mineral-ui': './src/library', // Used inside mineral-ui-icons components
            'mineral-ui-icons': './packages/mineral-ui-icons/src', // Used inside mineral-ui website,
            'mineral-ui-tokens': isProduction
              ? 'mineral-ui-tokens'
              : './packages/mineral-ui-tokens/src' // Used inside mineral-ui website and library
          }
        }
      ]);
    }

    if (isTest) {
      plugins.push('dynamic-import-node');
    } else {
      // This plugin breaks Jest code coverage on CI
      plugins.push('polished');
    }

    if (isProduction) {
      plugins.push(
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-flow-strip-types',
        [
          'transform-react-remove-prop-types',
          {
            mode: 'wrap',
            ignoreFilenames: ['node_modules']
          }
        ]
      );
    }

    return plugins;
  })()
};

if (DEBUG) {
  // eslint-disable-next-line no-console
  console.log(
    `\n\nLoaded ${__dirname}/babel.config.js\n`,
    JSON.stringify(config, null, 2)
  );
}

module.exports = config;
