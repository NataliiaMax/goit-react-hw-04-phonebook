import { useState } from 'react';
import style from './AddForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ addUser }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addUser({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.containerInput}>
        <label className={style.formLabel}>
          Name
          <input
            className={style.formInput}
            value={name}
            type="text"
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={style.formLabel}>
          Number
          <input
            className={style.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className={style.buttonForm}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addUser: PropTypes.func.isRequired
};
