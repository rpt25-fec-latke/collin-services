const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: DIST_DIR,
    filename: 'gameInfoCarouselBundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 3008,
    hot: true,
  },
};
