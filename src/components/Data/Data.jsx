/* import React, {useState, useEffect} from 'react';
import { fetchApi } from '../../api';
import {NativeSelect, FormControl } from '@material-ui/core';


const CountriesLister = ({ countryChange }) => { 
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetcher = async () => {
            setFetchedCountries( await fetchApi());
        }

        fetcher();
    }, [setFetchedCountries]);
 
    return (
        <FormControl>
            <NativeSelect>
            <option value="">Global</option>
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )

}

export default CountriesLister;*/