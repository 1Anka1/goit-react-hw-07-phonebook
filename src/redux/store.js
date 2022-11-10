import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter/slice';
import contactsApi from './contacts/api';
const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;
