import { useState, useEffect } from 'react';
import ContactForm from '../components/AddForm/AddForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { nanoid } from 'nanoid';
import style from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ??
    [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addUser = ({ name, number }) => {
    const newUser = {
      name,
      id: nanoid(),
      number,
    };

    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts.`);
    } else if (
      contacts.find(el => el.number.toLowerCase() === number.toLowerCase())
    ) {
      return alert(`${number} is already in contacts.`);
    } else {
      setContacts([newUser, ...contacts]);
    }
  };

  const deleteUser = userId => {
    setContacts(contacts.filter(({ id }) => id !== userId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={style.container}>
      <h1 className={style.titleBook}>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <h2 className={style.titleContacts}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} deleteUser={deleteUser} />
    </div>
  );
}
