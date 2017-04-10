const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const NODE_ENV = process.env.NODE_ENV || 'development';
const TARGET = process.env.TARGET;
const ANALYZE = process.env.ANALYZE;
const isProduction = NODE_ENV === 'production';

function getEntry() {
  if (TARGET === 'demo') {
    return './demo/index.js';
  } else {
    return './src/index.js';
  }
}

function getOutput({ packageName, packagePath }) {
  if (TARGET === 'demo') {
    return {
      filename: 'index.js',
      path: path.resolve(packagePath, 'dist/demo')
    };
  } else if (TARGET === 'site') {
    return {
      filename: 'index.js',
      path: path.resolve(packagePath, 'dist')
    };
  } else {
    return {
      filename: 'index.js',
      library: packageName,
      libraryTarget: 'umd',
      path: path.resolve(packagePath, 'dist/umd')
    };
  }
}

function getExternals() {
  if (['demo', 'site'].includes(TARGET)) {
    return;
  } else {
    return {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom'
      }
    };
  }
}

function getModule() {
  return {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  };
}

function getResolve() {
  return {
    mainFields: ['browser', 'module', 'main']
  };
}

function getDevServer({ packagePath }) {
  if (TARGET === 'site') {
    return {
      contentBase: path.join(packagePath, 'dist'),
      compress: true,
      host: '0.0.0.0'
    };
  } else if (TARGET === 'demo') {
    return {
      contentBase: path.join(packagePath, 'dist/demo'),
      compress: true,
      host: '0.0.0.0'
    };
  } else {
    return;
  }
}

function getDevtool() {
  return isProduction ? 'source-map' : 'cheap-module-eval-source-map';
}

function getPlugins() {
  let plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    })
  ];

  if (TARGET === 'demo') {
    plugins.push(
      new HtmlWebpackPlugin({
        template: './demo/index.html'
      })
    );
  }

  if (TARGET === 'site') {
    plugins.push(
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    );
  }

  if (isProduction) {
    plugins.concat([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]);
  }

  if (ANALYZE) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerHost: '0.0.0.0'
      })
    );
  }

  return plugins;
}

function makeWebpackConfig(options) {
  return {
    entry: getEntry(),
    output: getOutput(options),
    externals: getExternals(),
    module: getModule(),
    resolve: getResolve(),
    devServer: getDevServer(options),
    devtool: getDevtool(),
    plugins: getPlugins()
  };
}

module.exports = makeWebpackConfig;
