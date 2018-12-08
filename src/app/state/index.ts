/**
 * It creates export the function configureStore that creates store
 */

import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { IRootState } from 'app/models/state';
import { rootReducer } from 'app/state/rootReducer';

export function configureStore(initialState?: IRootState): Store<IRootState> {
  let middleware = applyMiddleware();

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<IRootState>;

  return store;
}
