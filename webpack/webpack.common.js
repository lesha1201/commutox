const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
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
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      watch: paths.SRC,
    }),
  ],
};
