const {
  join
} = require('path');

var JsDocPlugin = require('jsdoc-webpack-plugin-v2');

module.exports = {
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: [
        join(__dirname, '../src'),
      ],
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.(svg|png|jpg|ttf|woff|woff2)$/,
      loader: 'url-loader',
      exclude: /node_modules/
    }
    ],
  },
  output: {
    path: join(__dirname, '../app/dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  plugins: [new JsDocPlugin({
    conf: join(__dirname, 'jsdoc.json'),
  })]
};
