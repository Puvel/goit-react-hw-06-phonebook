import PropTypes from 'prop-types';
import css from './contactsItem.module.css';

export const ContactsItem = ({ id, name, number, deleteContact }) => (
  <li className={css.contactsItem}>
    <p className={css.contactText}>
      {name}:{number}
    </p>
    <button className={css.contactsItemBtn} id={id} onClick={deleteContact}>
      Delete
    </button>
  </li>
);

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
