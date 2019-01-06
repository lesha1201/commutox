import SignPage from 'app/pages/sign';
import { RouteProps } from 'react-router';

const signRoute: RouteProps = {
  exact: true,
  path: '/sign-(in|up)',
  component: SignPage,
};

export { signRoute };
