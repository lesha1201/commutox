import FeedPage from 'app/pages/feed';
import { RouteProps } from 'react-router-dom';

const feedRoute: RouteProps = {
  exact: true,
  path: '/(messages)?',
  component: FeedPage,
};

export { feedRoute };
