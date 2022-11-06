import PropTypes from 'prop-types';
import React, { useState } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//REDUX
import { removeContact } from 'redux/contacts/slice';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import * as contactShelfAPI from '../../redux/shared/api/contacts'

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

//  useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

  useEffect(() => {
    contactShelfAPI.getContacts().then(setItems);
  }, [])
  
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

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const elem = items.map(({ name, phone, id }) => {
    return (
      <li className={css.contactListItem} key={id}>
       {name}: {phone}{' '}
        <button className={css.remoteBtn} onClick={() => onRemoveContact(id)}>
          x
        </button>
      </li>
    );
  });

  return (
    <div>
      <p>Find contact by name:</p>
      <ol>{elem}</ol>
    </div>
  );
}

ContactList.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
