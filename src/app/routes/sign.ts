import { lazy } from 'react';

import { PATH } from 'app/shared/constants/routes';
import { RouteConfig } from './types';

const SignPage = lazy(() => import(/* webpackChunkName: "sign" */ 'app/pages/sign'));

const signRoute: RouteConfig = {
  exact: true,
  path: [PATH.signIn, PATH.signUp],
  component: SignPage,
};

export { signRoute };
