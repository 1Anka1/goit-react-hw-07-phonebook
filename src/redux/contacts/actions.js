import { createAction } from '@reduxjs/toolkit';

//PENDING
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
//FULFILLED
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
//REJECTED
export const fetchContactsError = createAction('contacts/fetchContactsError');
