import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const storageKey= 'contacts';

const getStoredContacts = ()=>{
  const savedContacts = window.localStorage.getItem(storageKey);
  return savedContacts !== null? JSON.parse(savedContacts):[]
    }  



export const App  =()=> {
  
    const [contacts, setContacts]= useState (getStoredContacts);
    const [filter, setFilter]= useState ("");
    
    useEffect(()=>{window.localStorage.setItem(
      storageKey,
      JSON.stringify(contacts)
    );} , [contacts] )
    
    const addContact = newContact => {
      const contactExist = contacts.some(
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
  
      setContacts(prevContacts => [...prevContacts, addingContact],
      );
    };
    
    const contactDelete = pickedId => {
      setContacts(     
        contacts.filter(contact => contact.id !== pickedId),
        
      );
    };
    
    const updateFilter = seekdName => {
     setFilter(
         seekdName
      );
    };
    
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
          <ContactForm onAdd={addContact} />

          <h2>Contacts</h2>

          {contacts.length > 0 && (
            <div>
              <p>Find contacts by name</p>
              <Filter name={filter} onUpdateFilter={updateFilter} />
              <ContactList
                contacts={pickedContact}
                onDelete={contactDelete}
              />
            </div>
          )}
        </div>
        <GlobalStyle />
      </div>
    );
  


}
