const path = require('path');
const S3Plugin = require('webpack-s3-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

const DIST_DIR = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  // mode: 'development',
  entry: ['./client/src/index.jsx'],
  output: {
    path: DIST_DIR,
    filename: '[name].infoCarouselBundle.js',
    chunkFilename: '[name].infoCarouselBundle.js',
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
    // new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new UglifyJSPlugin(),
    // new BrotliPlugin({
    //   asset: '[path].br[query]',
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    //   quality: 11,
    // }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
