import { useSelector} from 'react-redux';
//REDUX
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
// import { addContact } from 'redux/contacts/slice';

//COMPONENTS
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
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
    <Section title={'Task - 2 Contact book'}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h1>Contacts</h1>
      <Filter filter={filter} />
      {length > 0 ? (
        <ContactList items={filtredContacts} />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </Section>
  );
}