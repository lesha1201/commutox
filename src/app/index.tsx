import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { RouteConfig, feedRoute, chatRoute, settingsRoute, signRoute } from 'app/routes';
import { configureStore } from 'app/state';
import { DEFAULT_REDIRECT } from 'app/shared/constants';
import 'app/style/main.scss'; // Global styles
import style from './app.scss';

const store = configureStore();

const generateRouteElements = (routes: RouteConfig[]) =>
  routes.map(route => <Route key={String(route.path)} {...route} />);

function App() {
  return (
    <Provider store={store}>
      <div className={style.app}>
        <React.Suspense fallback={<div>Loading routes...</div>}>
          <Switch>
            {generateRouteElements([feedRoute, chatRoute, settingsRoute, signRoute])}
            <Redirect to={DEFAULT_REDIRECT} />
          </Switch>
        </React.Suspense>
      </div>
    </Provider>
  );
}

export default App;
