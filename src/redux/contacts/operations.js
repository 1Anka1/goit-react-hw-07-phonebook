import * as api from 'shared/api/contacts';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

const isDublicate = ({ name, number }, contacts) => {
  const result = contacts.find(
    item => item.name === name && item.number === number
  );
  return result;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContacts(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        return Report.warning(
          'Warning',
          'User is already in the contact list.'
        );
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
