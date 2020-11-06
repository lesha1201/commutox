const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const paths = require('./paths');

module.exports = {
  target: 'web',
  entry: path.join(paths.SRC, 'main.tsx'),
  output: {
    path: paths.DIST,
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      app: path.join(paths.SRC, 'app'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: path.resolve(paths.SRC),
        use: [{ loader: 'babel-loader', options: { cacheDirectory: false } }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(paths.SRC),
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
