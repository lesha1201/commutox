import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const NotFoundPage = lazy(() => import('app/pages/not-found'));

const notFoundRoute: RouteProps = {
  component: NotFoundPage,
};

export { notFoundRoute };
