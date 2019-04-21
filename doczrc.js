const merge = require('webpack-merge');
const path = require('path');
const paths = require('./webpack/paths');

const webpackOverlay = {
  resolve: {
    alias: {
      app: path.join(paths.SRC, 'app'),
    },
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
              namedExport: false,
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
};

export default {
  typescript: true,
  themeConfig: {
    mode: 'light',
    logo: {
      src: 'https://i.postimg.cc/Z52qndhz/Logo.png',
      width: '100%',
    },
    colors: {
      primary: '#006cff',
    },
    styles: {
      h1: {
        fontFamily: 'inherit',
        letterSpacing: '0.01em',
      },
    },
  },
  modifyBundlerConfig: config => {
    return merge(config, webpackOverlay);
  },
  filterComponents: files =>
    files.filter(filepath => /\/[A-Z]\w*(\/index)?\.(js|jsx|ts|tsx)$/.test(filepath)),
};
