/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: false,
  devtool: false,
  entry: './src/scripts/components/<% if (reactRouter) { %>main<% } else { %><%= scriptAppName %><% } %>.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': '../../../src/styles',
      'components': '../../../src/scripts/components/'
    }
  },

  module: {
    preLoaders: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      loader: 'jsxhint?babel'
    }],

    loaders: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },<% if (stylesLanguage === 'sass') { %> {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    },<% } %><% if (stylesLanguage === 'scss') { %> {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    },<% } %><% if (stylesLanguage === 'less') { %> {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    },<% } %><% if (stylesLanguage === 'stylus') { %> {
      test: /\.styl/,
      loader: 'style-loader!stylus-loader!less-loader'
    },<% } %> {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },
    { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
    { test: /\.ttf$/,    loader: "file-loader" },
    { test: /\.eot$/,    loader: "file-loader" },
    { test: /\.svg$/,    loader: "file-loader" }
    ]
  }
};
