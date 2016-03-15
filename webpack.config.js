/*eslint-env node */
var path = require('path');

module.exports = {
  entry: {
    demo: './src/demo.js',
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
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ],
  },
};
