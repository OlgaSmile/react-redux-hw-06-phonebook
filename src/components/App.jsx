import { useEffect, useState } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Input from './Input/Input';

export function App () {

  const parsedData = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(parsedData??[]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function updateContacts (values) {
    setContacts(prev=>[...prev, values]);
  };

  function onDeleteClick (id) {
    setContacts(
      prev=> prev.filter(ob => ob.id !== id),
    );
  };

  function checkName (name) {
    return contacts.find(ob => name === ob.name);
  };

  function onFilterChange(e) {
    setFilter(e.target.attributes.name.ownerElement.value.toLowerCase());
  }

  function onFilter() {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <Input updateContacts={updateContacts} checkName={checkName} />

        <Filter onFilterChange={onFilterChange} />

        <Contacts
          onDeleteClick={onDeleteClick}
          contacts={onFilter()}
        />
      </div>
    );
  }
