import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Country {
    id: number;
    country_name: string;
    country_code: string;
}

interface CountryState {
    countries: Country[];
}


const countriesFromStorage = localStorage.getItem('countries')
    ? JSON.parse(localStorage.getItem('countries') as string)
    : [];

const initialState: CountryState = {
    countries: countriesFromStorage,
};

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        addCountry: (state, action: PayloadAction<Country>) => {
            state.countries.push(action.payload);
            localStorage.setItem('countries', JSON.stringify(action.payload));
        },
    }
});

export const { addCountry } = countrySlice.actions;
export default countrySlice.reducer;