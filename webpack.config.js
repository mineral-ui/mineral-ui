/* @flow */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const ANALYZE = process.env.ANALYZE;
const isProduction = NODE_ENV === 'production';
const GOOGLE_TRACKING_ID = isProduction ? 'UA-107538931-1' : null;
const licenseHeader = `/**!
 * Mineral UI
 * Copyright 2017 CA
 * License: Apache-2.0
 */`;

module.exports = {
  entry: {
    index: './src/website/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist/website'),
    publicPath: '/'
  },
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  devServer: {
    contentBase: path.join(__dirname, './src/website'),
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/'
    }
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: (() => {
    let plugins = [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        GOOGLE_TRACKING_ID: JSON.stringify(GOOGLE_TRACKING_ID)
      }),
      new webpack.BannerPlugin({
        banner: licenseHeader,
        raw: true,
        entryOnly: true
      }),
      new HtmlWebpackPlugin({
        template: './src/website/index.html',
        GOOGLE_TRACKING_ID
      }),
      new CopyWebpackPlugin([
        {
          context: './src/website/public',
          from: '**/*'
        }
      ])
    ];

    if (ANALYZE) {
      plugins.push(
        new BundleAnalyzerPlugin({
          analyzerHost: '0.0.0.0'
        })
      );
    }

    return plugins;
  })()
};
