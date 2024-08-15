import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../../features/contacts/contactSlice';
import { v4 as uuidv4 } from 'uuid';

interface ContactFormProps {
  existingContact?: { id: string, name: string, email: string, phone: string };
  onSave: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ existingContact, onSave }) => {
  const [name, setName] = useState(existingContact?.name || '');
  const [email, setEmail] = useState(existingContact?.email || '');
  const [phone, setPhone] = useState(existingContact?.phone || '');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (existingContact) {
      dispatch(editContact({ id: existingContact.id, name, email, phone }));
    } else {
      dispatch(addContact({ id: uuidv4(), name, email, phone }));
    }
    onSave();
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button onClick={handleSubmit}>Save Contact</button>
    </div>
  );
};

export default ContactForm;
