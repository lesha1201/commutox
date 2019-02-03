const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const paths = require('./paths');

module.exports = {
  target: 'web',
  entry: path.join(paths.SRC, 'main.tsx'),
  output: {
    path: paths.DIST,
    filename: 'main.bundle.js',
    chunkFilename: '[chunkhash].js',
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
      { test: /\.js$/, include: path.resolve(paths.SRC), loader: 'babel-loader' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(paths.SRC),
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10,
        },
      },
    },
    runtimeChunk: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: paths.ROOT }),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
  ],
};
