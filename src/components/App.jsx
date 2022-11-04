import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//REDUX
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';
// import { addContact } from 'redux/contacts/slice';

//COMPONENTS
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFiltredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalisedFilter = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(({ name }) => {
      const normalisedName = name.toLocaleLowerCase();
      const result = normalisedName.includes(normalisedFilter);
      return result;
    });
    return filtredContacts;
  };

  const filtredContacts = getFiltredContacts();
  const length = contacts.length;

  return (
    <Section>
      <ContactForm />
      <Filter filter={filter} />
      {length > 0 ? (
        <ContactList items={filtredContacts} />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </Section>
  );
}
