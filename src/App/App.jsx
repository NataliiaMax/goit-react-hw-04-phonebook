import { useState, useEffect } from 'react';
import ContactForm from '../components/AddForm/AddForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { nanoid } from 'nanoid';
import style from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return (
      savedContacts ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    return () => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    };
  }, [contacts]);

  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem('contacts');
  //   };
  // }, []);

  const addUser = (name, number) => {
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
      setContacts(prev => {
        return [newUser, ...prev];
      });
    }
  };

  const deleteUser = userId => {
    setContacts(contacts.filter(({ id }) => id !== userId)
    )
}

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const visibleContacts = ({name}) => {
   name.toLowerCase().includes(filter.toLowerCase().trim())
  };

  return (
    <div className={style.container}>
      <h1 className={style.titleBook}>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <h2 className={style.titleContacts}>Contacts</h2>
      <Filter value="filter" onChange={changeFilter} />
      <ContactList contacts={visibleContacts} deleteUser={deleteUser} />
    </div>
  );
}
