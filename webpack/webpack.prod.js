// Setting the right env
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: path.resolve(paths.SRC),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
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
              modules: {
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
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }),
    new BundleAnalyzerPlugin(),
  ],
});
