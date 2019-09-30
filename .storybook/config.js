import { addParameters, configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import theme from './theme';
import '../src/app/style/main.scss';

addParameters({
  options: {
    theme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

configure(
  require.context('../src/app/shared', true, /\.stories\.(jsx?|tsx?|mdx)$/),
  module,
);
