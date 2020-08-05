const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const devWebpackConfig = require('../webpack/webpack.dev');
const paths = require('../webpack/paths');

module.exports = {
  stories: ['../src/app/shared/**/*.stories.{tsx,jsx,mdx}'],
  addons: [
    '@storybook/addon-docs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: config => {
    return {
      ...config,
      resolve: merge(config.resolve, devWebpackConfig.resolve),
      module: {
        ...config.module,
        rules: [
          ...devWebpackConfig.module.rules,
          {
            test: /\.(tsx?)$/,
            use: [
              {
                loader: require.resolve('react-docgen-typescript-loader'),
                options: {
                  tsconfigPath: path.resolve(paths.ROOT, 'tsconfig.json'),
                },
              },
            ],
          },
          {
            test: /\.stories\.mdx$/,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: '@mdx-js/loader',
                options: {
                  compilers: [createCompiler({})],
                },
              },
            ],
          },
          {
            test: /\.stories\.(tsx?|jsx?)$/,
            loader: require.resolve('@storybook/source-loader'),
            exclude: [/node_modules/],
            enforce: 'pre',
          },
        ],
      },
    };
  },
};
