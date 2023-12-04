import { ContactItem } from '../contactItem/ContactItem';
import { PhoneNoList } from './ContactListStyled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <PhoneNoList>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </PhoneNoList>
  );
};
