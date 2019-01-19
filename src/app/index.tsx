import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'app/routes';
import 'app/style/main.scss'; // Global styles
import * as style from './app.scss';

const routesComponents = routes.map(route => (
  <Route key={String(route.path)} {...route} />
));

function App() {
  return (
    <div className={style.app}>
      <Switch>{routesComponents}</Switch>
    </div>
  );
}

export default hot(App);
