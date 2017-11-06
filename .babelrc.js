const { DEBUG, BABEL_ENV, NODE_ENV, TARGET } = process.env;

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
      'polished',
      'transform-object-rest-spread',
      'transform-class-properties',
      'flow-react-proptypes'
    ];

    if (NODE_ENV === 'production') {
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
