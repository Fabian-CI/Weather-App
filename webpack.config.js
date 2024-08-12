const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins : [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        keepClosingSlash: true,
        removeAttributeQuotes: false,
        removeRedundantAttributes: false,
        useShortDoctype: false,
        removeEmptyAttributes: false,
        removeStyleLinkTypeAttributes: false,
        keepClosingSlash: true,
        minifyJS: false,
        minifyCSS: false,
        minifyURLs: false,
      },
    }),
    new Dotenv({
      path: './src/.env',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};