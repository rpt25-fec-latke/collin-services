const path = require('path');
const S3Plugin = require('webpack-s3-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

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
  plugins: [
    new S3Plugin({
      s3Options: {
        exclude: /.*\.(html|txt)/,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-2',
      },
      s3UploadOptions: {
        Bucket: 'steam-bundles',
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new UglifyJSPlugin(),
  ],
};
