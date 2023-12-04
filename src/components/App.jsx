import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const storageKey= 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  updateFilter = seekdName => {
    this.setState({
      filter: seekdName,
    });
  };

  addContact = newContact => {
    const contactExist = this.state.contacts.some(
      contact => contact.name === newContact.name
    );

    if (contactExist) {
      Notiflix.Notify.failure(` ${newContact.name} is already in phonebook `);
      return;
    }

    const addingContact = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, addingContact],
    }));
  };

  contactDelete = pickedId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== pickedId),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;

    const pickedContact = contacts.filter(contact => {
      const fitContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return fitContact;
    });

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.addContact} />

          <h2>Contacts</h2>

          {contacts.length > 0 && (
            <div>
              <p>Find contacts by name</p>
              <Filter name={filter} onUpdateFilter={this.updateFilter} />
              <ContactList
                contacts={pickedContact}
                onDelete={this.contactDelete}
              />
            </div>
          )}
        </div>
        <GlobalStyle />
      </div>
    );
  }
}
