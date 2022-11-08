import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

//REDUX
import { getFiltredContacts, getState ,getNumberOfAllContacts} from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice'
import { fetchContacts, addContact, removeContact } from 'redux/contacts/operations';
import { useFetchContactsQuery, useAddContactMutation, useRemoveContactMutation } from 'redux/contacts/api';
//COMPONENTS
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useState } from 'react';
import Page from './Page/Page';

export default function Contacts() {
  const [page, setPage] = useState(1);
  const { data =[], isLoading, isSuccess } = useFetchContactsQuery(page);
  const [addContact] = useAddContactMutation();
  const [removeContact] = useRemoveContactMutation()
  
  const contacts = useSelector(getFiltredContacts);
  const {loading, error} = useSelector(getState);

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onAddContact = contact => {
    addContact(contact);
  };

  const onRemoveContact = id => {
    removeContact(id)
  };

  const onChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value))
  };

  return (
    <>
      <ContactForm onSubmit={onAddContact} />
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      {/* <p>You have - {contactCount} contacts in your phonebook:</p> */}
      {isSuccess && data.length > 0 && (<ContactList items={data} removeContact={onRemoveContact} />)}
      {isSuccess && (<Page setPage={setPage}/>)}
      {isLoading && <p>...loading</p>}
      {/* {isError && <p>Ooops, something went wrong!</p>} */}
    </>
  );
}