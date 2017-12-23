const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const env = require('yargs').argv.env;

let  libraryName = 'simplify';

let plugins = [];
let outputFile = libraryName + '.min.js';


const config = {
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/library`,
    filename: outputFile,
    library: 'fy',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: '/(\\.jsx|\\.js)$/',
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: [new UglifyJsPlugin()]
}

module.exports = config
