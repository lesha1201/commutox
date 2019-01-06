import SettingsPage from 'app/pages/settings';
import { RouteProps } from 'react-router-dom';

const settingsRoute: RouteProps = {
  exact: true,
  path: '/settings',
  component: SettingsPage,
};

export { settingsRoute };
