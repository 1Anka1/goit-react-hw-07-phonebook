import React, { useState } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

//COMPONENTS
import css from './ContactForm.module.css';

//REDUX
import { addContact } from 'redux/contacts/slice';
import { getContacts } from 'redux/contacts/selectors';

export default function ContactForm() {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);

	const nameId = nanoid();
	const numberId = nanoid();

	const onChangeName = e => setName(e.currentTarget.value);
	const onChangeNumber = e => setNumber(e.currentTarget.value);
	
	const onAddContact = e => {
    e.preventDefault();

    const newElement = { id: numberId, name, number };

    contacts.some(contact => contact.name === name)
      ? Report.warning(`${name}`, 'This user is already in the contact list.', 'OK')
      : dispatch(addContact(newElement));
    setName('');
    setNumber('');
  };
	
  return (
    <>
      <h1>Phonebook</h1>
      <fieldset>
      <form onSubmit={onAddContact}>
        <label>
          <h2 className={css.title}>Name</h2>
          <input
            id={nameId}
            type="text"
            value={name}
            name="name"
            onChange={onChangeName}
            placeholder="Please enter your full name "
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
        </label>

        <label>
          <h2 className={css.title}>Number</h2>
          <input
            id={numberId}
            type="tel"
            name="number"
            onChange={onChangeNumber}
            value={number}
            placeholder="Please enter your number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required />
        </label>
        <button className={css.addBtn}>Add Contact</button>
      </form>
    </fieldset></>
  );
}

