const webpack = require('webpack');
const merge = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: paths.SRC,
    hot: true,
    stats: 'minimal',
    port: 3013,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.s?css$/,
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
