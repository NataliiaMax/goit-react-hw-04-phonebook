import { useState } from 'react';
import style from './AddForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  handleSubmit = event => {
    event.preventDefault();
    addUser(name, number);
    this.reset();
  };

  reset = () => {
    setName, setNumber;
  };

  handleChange = event => {
    const { user, value } = event.target;
    switch (user) {
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
    <form onSubmit={this.handleSubmit}>
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
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
