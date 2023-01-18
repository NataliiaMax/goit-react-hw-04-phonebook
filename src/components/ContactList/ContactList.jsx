import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import ContactUser from '../ContactUser/ContactUser';

export default function ContactList({ contacts, deleteUser }) {
  return (
    <ul className={style.listUsers}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactUser
            deleteUser={deleteUser}
            key={id}
            name={name}
            number={number}
            userId={id}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteUser: PropTypes.func.isRequired,
};
