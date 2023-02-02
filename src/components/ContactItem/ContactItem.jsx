import PropTypes from 'prop-types';
import css from './ContactItem.module.css';


const ContactItem = ({ id, name, number, removeContact }) => {
    return (
        <li className={css.listItem}>
            {name}: {number}
            <button type="button" className={css.btnContactRemove} onClick={() => removeContact(id)}>Delete</button>
        </li>
    );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};