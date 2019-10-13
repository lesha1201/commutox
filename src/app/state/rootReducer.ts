/**
 * It combines all reducers and exports it as rootReducer
 */

import { combineReducers } from 'redux';

import { testReducer } from 'app/state/test';
import { IRootState } from 'app/types/state';

export const rootReducer = combineReducers<IRootState>({
  test: testReducer,
});
