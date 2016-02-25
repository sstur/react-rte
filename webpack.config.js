/*eslint-env node */
var path = require('path');

module.exports = {
  entry: {
    example: './src/example.js',
  },
  output: {
    path: path.join(__dirname, 'assets/dist'),
    publicPath: '/assets/dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
    ],
  },
};
