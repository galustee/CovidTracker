import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';

import styles from './SearchBar.module.css';

import { searchCountries, searchCities } from '../../api';

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
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue = '' onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value = 'countries'>Countries</option>
                {searchedCountries.map((country, i) => <option key = {i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

    )
}

const SearchBar1 = ( {handleCityChange} ) => {
    const [searchedCities, setSearchedCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            setSearchedCities(await searchCities());
        }

        fetchCities();
    }, [setSearchedCities]);
    
    // console.log(searchedCountries);
    
    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue = '' onChange = {(e) => handleCityChange(e.target.value)}>
            <option value = 'cities'>Cities</option>
            {searchedCities.map((city, j) => <option key = {j} value = {city}>{city}</option>)}
            </NativeSelect>
        </FormControl>

    )
}

export {SearchBar as default, SearchBar1};