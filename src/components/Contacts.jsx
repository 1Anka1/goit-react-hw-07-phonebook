import { useSelector } from 'react-redux';

//REDUX
import { getContacts, getIsLoading, getError } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';

//COMPONENTS
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function Contact() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const length = contacts.length;
  return (
    <>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter filter={filter} />
      {length > 0 ? (<ContactList/>) : (<p>Contact list is empty.</p>)}
    </>
  );
}
