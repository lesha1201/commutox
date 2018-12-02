import Feed from 'app/pages/feed';

const feedRoute = {
  exact: true,
  path: '/(messages)?',
  component: Feed,
};

export { feedRoute };
