// Setting the right env
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

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
        test: /\.s?css$/,
        include: path.resolve(paths.SRC),
        use: [
          { loader: 'style-loader', options: { hmr: false } },
          {
            loader: 'dts-css-modules-loader',
            options: {
              namedExport: true,
              banner: '// This file is generated automatically',
            },
          },
          {
            loader: 'css-loader',
            options: {
              camelCase: 'only',
              modules: true,
              importLoaders: 2,
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
