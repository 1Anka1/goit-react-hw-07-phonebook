import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from 'redux/shared/api/contacts';
// const {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingErro,
// } = require('./slice');

export const fetchContacts = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});
// export const fetchContacts = () => {
//   const func = async dispatch => {
//     dispatch(fetchingInProgress());
//     try {
//       const data = await api.getContacts();
//       dispatch(fetchingSuccess(data));
//     } catch (error) {
//       dispatch(fetchingErro(error));
//     }
//   };
//   return func;
// };
