const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../../shared/config/webpack.config');

const config = Object.assign({}, baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0'
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  externals: {},
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
});

module.exports = config;
