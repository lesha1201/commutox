/**
 * It combines all reducers and exports it as rootReducer
 */

import { combineReducers } from 'redux';

import { testReducer } from 'app/state/test';
import { RootState } from 'app/types/state';

export const rootReducer = combineReducers<RootState>({
  test: testReducer,
});
