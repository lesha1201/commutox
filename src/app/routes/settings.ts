import { lazy } from 'react';

import { PATH } from 'app/shared/constants/routes';
import { RouteConfig } from './types';

const SettingsPage = lazy(() =>
  import(/* webpackChunkName: "settings" */ 'app/pages/settings'),
);

const settingsRoute: RouteConfig = {
  exact: true,
  path: PATH.settings,
  component: SettingsPage,
};

export { settingsRoute };
