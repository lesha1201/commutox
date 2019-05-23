import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'app/routes';
import { configureStore } from 'app/state';
import 'app/style/main.scss'; // Global styles
import style from './app.scss';

const store = configureStore();

const routesComponents = routes.map(route => (
  <Route key={String(route.path)} {...route} />
));

function App() {
  return (
    <Provider store={store}>
      <div className={style.app}>
        <React.Suspense fallback={<div>Loading routes...</div>}>
          <Switch>{routesComponents}</Switch>
        </React.Suspense>
      </div>
    </Provider>
  );
}

export default hot(App);
