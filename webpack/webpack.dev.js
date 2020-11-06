// Setting the right env
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
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
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: path.resolve(paths.SRC),
        use: [
          'style-loader',
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
              esModule: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                exportLocalsConvention: 'camelCaseOnly',
              },
              importLoaders: 2,
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [paths.SRC],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
