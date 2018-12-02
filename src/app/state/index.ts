/**
 * It creates export the function configureStore that creates store
 */

import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { RootState } from 'app/models/state';
import { rootReducer } from 'app/state/rootReducer';

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware();

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  return store;
}
