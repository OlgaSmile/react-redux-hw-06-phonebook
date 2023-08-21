import { useSelector } from 'react-redux';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Input from './Input/Input';

export function App() {
  const contacts = useSelector(({ contacts }) => contacts);
  const filter = useSelector(({ filters }) => filters);

  function onFilter() {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }

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

      <Input />

      <Filter />

      <Contacts contacts={onFilter()} />
    </div>
  );
}