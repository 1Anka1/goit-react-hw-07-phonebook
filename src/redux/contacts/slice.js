import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';
import { pendingCallback, errorCallback } from 'shared/helpers/redux';

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: pendingCallback,
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.loading = false;
    },
    [fetchContacts.error]: errorCallback,
    [addContact.pending]: pendingCallback,
    [addContact.fulfilled]: (store, { payload }) => {
      store.items.push(payload);
      store.loading = false;
    },
    [addContact.error]: errorCallback,
    [removeContact.pending]: pendingCallback,
    [removeContact.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(item => item.id !== payload);
      store.loading = false;
    },
    [removeContact.error]: errorCallback,
  },
});
export default contactsSlice.reducer;
