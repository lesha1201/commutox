import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const SignPage = lazy(() => import(/* webpackChunkName: "sign" */ 'app/pages/sign'));

const signRoute: RouteProps = {
  exact: true,
  path: '/sign-(in|up)',
  component: SignPage,
};

export { signRoute };
