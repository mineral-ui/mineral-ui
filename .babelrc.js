const { DEBUG, BABEL_ENV, NODE_ENV, TARGET } = process.env;
const isProduction = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';

/**
 * Plugins run before presets.
 * Plugins run first to last.
 * Presets run last to first.
 *
 * https://babeljs.io/docs/plugins/#plugin-preset-ordering
 */

module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 1 version']
        },
        useBuiltIns: TARGET === 'website',
        modules:
          BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false,
        debug: DEBUG
      }
    ],
    'react'
  ],
  plugins: (() => {
    let plugins = [
      'transform-object-rest-spread',
      'flow-react-proptypes',
      'transform-class-properties',
      'syntax-dynamic-import'
    ];

    if (TARGET !== 'icons') {
      // TARGET=icons is used when building mineral-ui-icons
      // mineral-ui package built using local paths - not dependent on mineral-ui-icons package
      // mineral-ui-icons package built using actual npm package name - dependent on mineral-ui package
      plugins.push(
        ['module-resolver', {
          alias: {
            'mineral-ui': './src/library', // Used inside mineral-ui-icons components
            'mineral-ui-icons': './packages/mineral-ui-icons/src', // Used inside mineral-ui website,
            'mineral-ui-tokens':
              isProduction
                ? 'mineral-ui-tokens'
                : './packages/mineral-ui-tokens/src' // Used inside mineral-ui website and library
          }
        }]
      );
    }

    if (isTest) {
      plugins.push('dynamic-import-node');
    } else {
      // This plugin breaks Jest code coverage on CI
      plugins.push('polished');
    }

    if (isProduction) {
      plugins.push(
        'babel-plugin-transform-react-constant-elements',
        'babel-plugin-transform-react-inline-elements'
      );

      if (TARGET === 'website') {
        plugins.push(
          ['transform-react-remove-prop-types', {
            'plugins': [
              ['babel-plugin-flow-react-proptypes', { 'omitRuntimeTypeExport': true }],
              'babel-plugin-transform-flow-strip-types'
            ]
          }]
        );
      }
    }

    return plugins;
  })()
};
