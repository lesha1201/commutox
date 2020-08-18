import { lazy } from 'react';

import { PATH } from 'app/shared/constants/routes';
import { RouteConfig } from './types';

const FeedPage = lazy(() => import(/* webpackChunkName: "feed" */ 'app/pages/feed'));

const feedRoute: RouteConfig = {
  exact: true,
  path: PATH.feed,
  component: FeedPage,
};

export { feedRoute };
