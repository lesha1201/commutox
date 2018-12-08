const merge = require('webpack-merge');

const webpackOverlay = {
  module: {
    rules: [
      {
        test: /\.scss$/,
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
              localIdentName: '[local]__[hash:base64:5]',
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
  modifyBabelRc: babelrc => Object.assign({}, babelrc, { plugins: [] }),
  modifyBundlerConfig: config => {
    return merge(config, webpackOverlay);
  },
};
