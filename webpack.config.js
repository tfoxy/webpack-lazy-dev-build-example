const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [],
};
