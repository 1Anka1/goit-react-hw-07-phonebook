import axios from 'axios';

const inctanceContacts = axios.create({
  baseURL: 'https://6363c7828a3337d9a2e7a4e3.mockapi.io/api/contacts',
  params: {
    _limit: 12,
  },
});

export const getContacts = async () => {
  const { data } = await inctanceContacts.get('/');
  return data;
};
export const addContacts = async data => {
  const { data: result } = await inctanceContacts.post('/', data);
  return result;
};
export const removeContacts = async id => {
  const { data } = await inctanceContacts.delete(`/${id}`);
  return data;
};
