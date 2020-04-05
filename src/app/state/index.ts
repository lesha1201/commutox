/**
 * It exports the function 'configureStore' that creates store
 */

import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from 'app/state/rootReducer';
import { RootState } from 'app/types/state';

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware();

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  return store;
}
