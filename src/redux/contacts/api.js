import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6363c7828a3337d9a2e7a4e3.mockapi.io/api/contacts',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/',
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    removeContact: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
export default contactsApi;
