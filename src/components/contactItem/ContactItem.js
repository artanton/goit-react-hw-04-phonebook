import { DeleteButton, PhoneNoItem } from './ContactItemStyled';

export const ContactItem = ({ contact, onDelete }) => {
  const phoneNumber = formatPhoneNumber(contact);

  return (
    <PhoneNoItem>
      <p>
        {contact.name}: {phoneNumber}
      </p>
      <DeleteButton onClick={() => onDelete(contact.id)}>Delete</DeleteButton>
    </PhoneNoItem>
  );
};

function formatPhoneNumber(contact) {
  const num = contact.number.toString();

  const formattedNo =
    num.slice(0, 2) +
    '-' +
    num.slice(2, 5) +
    '-' +
    num.slice(5, 8) +
    '-' +
    num.slice(8, 10) +
    '-' +
    num.slice(10);
  const formattedNumber = formattedNo;

  return formattedNumber;
}
