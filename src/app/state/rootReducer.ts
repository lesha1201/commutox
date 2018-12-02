/**
 * It combines all reducers and exports it as rootReducer
 */

import { combineReducers } from 'redux';
import { RootState } from 'app/models/state';
import { testReducer } from 'app/state/test';

export const rootReducer = combineReducers<RootState>({
  test: testReducer,
});
