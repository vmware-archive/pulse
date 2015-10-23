var path = require('path');
var webpack = require('webpack');
module.exports = {
  cache: true,
  entry: {
    index: './app/js/index.js',
    style: './app/style/index.scss'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      // required for including stylesheets
      { test: /\.css$/,   loader: 'style!css' },
      { test: /\.scss$/,  loader: 'style!css!sass'},

      // required for bootstrap icons
      { test: /\.(woff|woff2)$/,  loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.ttf$/,           loader: 'file-loader?prefix=font/' },
      { test: /\.eot$/,           loader: 'file-loader?prefix=font/' },
      { test: /\.svg$/,           loader: 'file-loader?prefix=font/' },

      // required for react jsx
      { test: /\.js$/,    loader: 'jsx-loader' },
      { test: /\.jsx$/,   loader: 'jsx-loader?insertPragma=React.DOM' }
    ]
  }
};
