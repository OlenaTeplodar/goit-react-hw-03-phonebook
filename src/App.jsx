import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

class App extends Component {
  
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContactArray = contacts.filter(contact => contact.id !== id);
      return { contacts: newContactArray };
    });
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  handleSubmit = ({ name, number }) => {
    if (this.isDublication({ name })) {
      alert(`${name}  is already in contacts`);
      return false;
    }
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts] };
    });
    // return true;
  };

  getFindContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const findNormalized = filter.toLowerCase();
    const data = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(findNormalized);
    });
    return data;
  }

  isDublication({ name }) {
    const nameNormalized = name.toLowerCase();
    const { contacts } = this.state;
    const duble = contacts.find(({ name }) => {
      return name.toLowerCase() === nameNormalized;
    });
    return Boolean(duble);
  }

  render() {
    const { filter } = this.state;
    const contacts = this.getFindContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleFilter} value={filter} />
        <ContactList contacts={contacts} removeContact={this.removeContact} />
      </div>
    );
  }
}

export default App;
