import { PropTypes } from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, removeContact }) => {
    return (
     
        
        <ul className={css.listOfContacts}>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                removeContact={removeContact}
              />
            );
          })}
        </ul>
  
    );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};

