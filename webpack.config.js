/*eslint-env node */
var path = require('path');
var webpack = require('webpack');

var loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    exclude: /\.global\.css$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    ],
  },
  {test: /\.global\.css$/, loader: 'style!raw'},
];

module.exports = [{
  entry: './src/RichTextEditor.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-rte.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {loaders: loaders},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      comments: true,
      mangle: false,
      compress: {
        dead_code: true,
      },
    }),
  ],
}, {
  entry: {
    demo: './src/demo.js',
  },
  output: {
    path: path.join(__dirname, 'assets/dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {loaders: loaders},
}];
