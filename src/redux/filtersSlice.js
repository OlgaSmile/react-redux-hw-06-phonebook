import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterChange: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterChange } = filtersSlice.actions;

export default filtersSlice.reducer;