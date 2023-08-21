import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filtersSlice';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Return contacts by name
        <input
          type="text"
          name="filter"
          onChange={e =>
            dispatch(
              filterChange(
                e.target.attributes.name.ownerElement.value.toLowerCase()
              )
            )
          }
        />
      </label>
    </>
  );
}