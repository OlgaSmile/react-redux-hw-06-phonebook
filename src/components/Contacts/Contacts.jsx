import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function Contacts({ contacts }) {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <div>
              {name}: {number}
            </div>
            <button
              type="button"
              onClick={() => console.log(dispatch(deleteContact(id)))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}