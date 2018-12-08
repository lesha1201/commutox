import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'app/routes';
import './app.scss';

const routesComponents = routes.map(route => <Route key={route.path} {...route} />);

export const App = hot(module)(() => <Switch>{routesComponents}</Switch>);
