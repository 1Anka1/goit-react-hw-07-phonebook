// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   tagTypes: ['Contacts'],
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6363c7828a3337d9a2e7a4e3.mockapi.io/api/contacts',
//   }),
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: page => `/?page=${page}&limit=5`,
//       providesTags: result =>
//         result
//           ? [
//               ...result.map(({ id }) => ({ type: 'Contacts', id })),
//               { type: 'Contacts', id: 'LIST' },
//             ]
//           : [{ type: 'Contacts', id: 'LIST' }],
//     }),
//     addContact: builder.mutation({
//       query: body => ({
//         url: '/',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
//     }),
//     removeContact: builder.mutation({
//       query: id => ({
//         url: `/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useAddContactMutation,
//   useRemoveContactMutation,
// } = contactsApi;
// export default contactsApi;
