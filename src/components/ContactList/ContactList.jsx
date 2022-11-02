import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactList.module.css';

//REDUX
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/slice';

export default function ContactList({ items }) {
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const elem = items.map(({ name, number, id }) => {
    return (
      <li className={css.contactListItem} key={id}>
        {name} : {number}{' '}
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
