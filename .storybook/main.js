const { merge } = require('webpack-merge');
const devWebpackConfig = require('../webpack/webpack.dev');

module.exports = {
  stories: ['../src/app/shared/**/*.stories.{tsx,jsx,mdx}'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource'],
  webpackFinal: config => {
    return {
      ...config,
      resolve: merge(config.resolve, devWebpackConfig.resolve),
      module: {
        ...config.module,
        rules: [...devWebpackConfig.module.rules, ...config.module.rules],
      },
    };
  },
};
