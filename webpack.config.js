const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    // repositories: './src/js/repoList.js'
  },
  output: {
    filename: '[name].bundle.js', // use [name] to generate a unique name for each asset 
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Resume',
      template: './index.html',
      showErrors: true,
      xhtml: true,
    }),
    new MiniCssExtractPlugin({
      linkType: 'text/css',

    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-import-assertions']
          },
        },
      },
    ],
  },
};