import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { Country } from '../../typings/countryTypes';

interface InitialStateDefaultObject {
  countries: Country[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  countries: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState: INITIAL_STATE,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = dataSlice.actions;
export default dataSlice.reducer;
