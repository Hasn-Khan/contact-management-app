import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from '../src/features/contacts/ContactForm';
import ContactList from '../src/features/contacts/ContactList';
import ContactDetails from '../src/features/contacts/ContactDetails';
import Dashboard from './features/dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contacts/new" element={<ContactForm onSave={() => window.history.back()} />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="/contacts/:id/edit" element={<ContactForm onSave={() => window.history.back()} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
