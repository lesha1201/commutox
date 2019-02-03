const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3013',
    'webpack/hot/only-dev-server',
    common.entry,
  ],
  devServer: {
    contentBase: paths.SRC,
    hot: true,
    stats: 'minimal',
    host: '0.0.0.0',
    port: 3013,
    historyApiFallback: {
      disableDotRule: true,
    },
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(paths.SRC),
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.s?css$/,
        include: path.resolve(paths.SRC),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              namedExport: true,
              camelCase: true,
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
