import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

// import * as contactShelfAPI from '../shared/api/contacts';
// import * as contactActions from './actions';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactActions.fetchContactsRequest());
//   try {
//     const contacts = await contactShelfAPI.getContacts();
//     dispatch(contactActions.fetchContactsSuccess(contacts));
//     console.log(contacts);
//   } catch (error) {
//     dispatch(contactActions.fetchContactsError(error));
//   }
// };
