const webpackMerge = require('webpack-merge');
const makeWebpackConfig = require('../../../utils/makeWebpackConfig');
const TARGET = process.env.TARGET;

const baseConfig = makeWebpackConfig({
  packageName: 'HelloWorld',
  packagePath: __dirname
});

let config = baseConfig;
if (TARGET !== 'demo') {
  config = webpackMerge(baseConfig, {
    externals: {
      '@mineral-ui/hello': {
        root: 'Hello',
        commonjs: '@mineral-ui/hello',
        commonjs2: '@mineral-ui/hello',
        amd: '@mineral-ui/hello'
      },
      '@mineral-ui/world': {
        root: 'World',
        commonjs: '@mineral-ui/world',
        commonjs2: '@mineral-ui/world',
        amd: '@mineral-ui/world'
      }
    }
  });
}

module.exports = config;
