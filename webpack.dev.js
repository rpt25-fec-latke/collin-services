const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  mode: 'development',
  entry: ['./client/src/index.jsx'],
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
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {},
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST_DIR,
    port: 8080,
    hot: true,
    open: true,
  },
  plugins: [],
};
