const {
  join
} = require('path');

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
        test: /\.(svg|png|ttf|woff|woff2)$/,
        loader: 'file-loader',
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
  plugins: [],
  externals: [
    'buttercup-importer', 'zxcvbn', 'dropbox', 'webdav'
  ]
};
