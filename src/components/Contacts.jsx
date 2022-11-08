import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

//REDUX
import { getFiltredContacts, getState} from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice'
import { fetchContacts, addContact, removeContact } from 'redux/contacts/operations';
// import { useFetchContactsQuery, useAddContactMutation, useRemoveContactMutation } from 'redux/contacts/api';
//COMPONENTS
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import { useState } from 'react';

export default function Contacts() {
  // const [page, setPage] = useState(1);
  // const { data =[], isLoading, isSuccess } = useFetchContactsQuery(page);
  // const [addContact] = useAddContactMutation();
  // const [removeContact] = useRemoveContactMutation()

  const contacts = useSelector(getFiltredContacts);
  // console.log(contacts);
  const {loading, error} = useSelector(getState);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onAddContact = contact => {
       const action = addContact(contact);
        dispatch(action);
  };

  const onRemoveContact = id => {
    const action = removeContact(id);
        dispatch(action);  };

  const onChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value))
  };
  const length = contacts.length;
  return (
    <>
      <ContactForm onSubmit={onAddContact} />
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      {length > 0 ? (
        <ContactList items={contacts} removeContact={onRemoveContact} />
      ) : (
        <p>Contact list is empty.</p>
      )}
      {loading && <p>...loading</p>}
      {error && <p>oops, something went wrong</p>}
    </>
  );
}