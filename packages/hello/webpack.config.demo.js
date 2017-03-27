const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

const config = Object.assign({}, baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0'
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './demo/index.js',
  externals: {},
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/demo')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    })
  ]
});

module.exports = config;
