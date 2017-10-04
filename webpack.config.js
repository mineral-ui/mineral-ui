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
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const compactLicenseHeader = require('./utils/license').compactLicenseHeader;
const NODE_ENV = process.env.NODE_ENV || 'development';
const ANALYZE = process.env.ANALYZE;
const isProduction = NODE_ENV === 'production';
const isDevServer = process.argv.find(arg =>
  arg.includes('webpack-dev-server')
);
const GOOGLE_TRACKING_ID = isProduction ? 'UA-107538931-1' : null;

module.exports = {
  entry: {
    index: './src/website/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist/website'),
    publicPath: '/'
  },
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
  plugins: (() => {
    let plugins = [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        GOOGLE_TRACKING_ID: JSON.stringify(GOOGLE_TRACKING_ID)
      }),
      new webpack.BannerPlugin({
        banner: compactLicenseHeader,
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
      ]),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => {
          return (
            module.context && module.context.indexOf('node_modules') !== -1
          );
        }
      })
    ];

    if (isProduction && !isDevServer) {
      plugins = plugins.concat([
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
            screw_ie8: true,
            warnings: false
          },
          sourceMap: true
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
  })()
};
