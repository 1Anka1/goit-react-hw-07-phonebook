import { combineReducers } from 'redux';

// import contactReducer from './contacts/slice';
import contactsApi from './contacts/api';
import filterReducer from './filter/slice';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterReducer,
});

export default rootReducer;
