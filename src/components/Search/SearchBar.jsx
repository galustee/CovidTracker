import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';

import styles from './SearchBar.module.css';

import { searchCountries } from '../../api';

const SearchBar = ( {handleCountryChange} ) => {
    const [searchedCountries, setSearchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setSearchedCountries(await searchCountries());
        }

        fetchCountries();
    }, [setSearchedCountries]);
    
    // console.log(searchedCountries);
    
    return (
        <FormControl className = {StylesProvider.formControl}>
            <NativeSelect defaultValue = '' onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value = 'countries'>Countries</option>
                {searchedCountries.map((country, i) => <option key = {i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default SearchBar;