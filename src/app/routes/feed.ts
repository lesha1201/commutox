import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const FeedPage = lazy(() => import('app/pages/feed'));

const feedRoute: RouteProps = {
  exact: true,
  path: '/(messages)?',
  component: FeedPage,
};

export { feedRoute };
