import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as contactActions from './actions';

const entities = createReducer([], {
  [contactActions.fetchContactsSuccess]: (_, action) => action.payload,
});
const isLoading = createReducer(false, {
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,
});
const error = createReducer(null, {
  [contactActions.fetchContactsError]: (_, action) => action.payload,
  [contactActions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
