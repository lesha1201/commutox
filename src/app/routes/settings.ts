import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const SettingsPage = lazy(() =>
  import(/* webpackChunkName: "settings" */ 'app/pages/settings'),
);

const settingsRoute: RouteProps = {
  exact: true,
  path: '/settings',
  component: SettingsPage,
};

export { settingsRoute };
