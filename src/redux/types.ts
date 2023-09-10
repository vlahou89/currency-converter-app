import { combineReducers } from '@reduxjs/toolkit';
import currencyReducer from './currencySlice';

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
