import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

//REDUX
import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice'
import { fetchContacts } from 'redux/contacts/operations';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts/api';

//COMPONENTS
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function Contacts() {
  const [addContact] = useAddContactMutation();

  const { data =[], isLoading, isSuccess, isError } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () =>
    data
      .filter(
        ({ name, number }) =>
          name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
          number.includes(filter)
      )
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
     );
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onAddContact = contact => {
    addContact(contact)
  };

  const onChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value))
  };

  const length = data.length;
  return (
    <>
      <ContactForm onSubmit={onAddContact} />
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      {isSuccess && length > 0 ? (
        <ContactList items={filteredContacts()} />
      ) : (
        <p>Contact list is empty.</p>
      )}
      {isLoading && <p>...loading</p>}
      {isError && <p>oops, something went wrong</p>}
    </>
  );
}