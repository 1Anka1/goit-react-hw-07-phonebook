export const getContacts = ({ contacts }) => contacts.items;
export const getState = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});
export const getFiltredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalisedFilter = filter.toLocaleLowerCase();
  const filtredContacts = contacts.items.filter(({ name }) => {
    const normalisedName = name.toLocaleLowerCase();
    const result = normalisedName.includes(normalisedFilter);
    return result;
  });
  return filtredContacts;
};
