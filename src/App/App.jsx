import {useState,useEffect} from 'react';
import ContactForm from '../components/AddForm/AddForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { nanoid } from 'nanoid';
import style from './App.module.css';

export default function App () {
  const [contacts, setContacts ] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return (
      contacts ?? [    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }])});

    const [filter, setFilter] =useState('')

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(state))
  }),[contacts]

  useEffect(() => {
    return () => {
      localStorage.removeItem('contacts');
    };
  }, []);


  const addUser = data => {
    setContacts(prev => {
      const newUser = {
      ...data,
      id: nanoid(),
    };
    return [newUser, ...prev]
    }) 

    if (
      contacts.find(el => el.name.toLowerCase() === data.name.toLowerCase())
    ) {
      return alert(`${data.name} is already in contacts.`);
    }}

  deleteUser = userId => {
   setContacts(prev => {
   const newUsers = prev.filter(({ id }) => id !== userId)
   return newUsers
   })
    };
  

  changeFilter = event => {
    setFilter( event.currentTarget.value);
  };

    const visibleContacts = ()=>{
      contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    )}

    return (
      <div className={style.container}>
        <h1 className={style.titleBook}>Phonebook</h1>
        <ContactForm addUser={addUser} />
        <h2 className={style.titleContacts}>Contacts</h2>
        <Filter value='filter' onChange={changeFilter} />
        <ContactList contacts={visibleContacts} deleteUser={deleteUser} />
      </div>
    );
  }



