import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { deleteContact } from '../../features/contacts/contactSlice';
import { Link } from 'react-router-dom';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map(contact => (
        <div key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
