import React from 'react';

//import { Data, Leaflet } from './components';
import { Leaflet, Charts } from './components';
import {default as SearchBar, SearchBar1 } from './components/Search/SearchBar';
import styles from './App.module.css';

import { fetchCountry, fetchProvince, fetchCity, fetchHistorical, fetchUSHistorical, searchCountries, searchCities} from './api';


class App extends React.Component{
    state = {
        countryData: {},
        provinceData: {},
        cityData: {},
        country: '',
        newCountryData: {},
        newCityData: {},
    }

    async componentDidMount() {
        const countryData = await fetchCountry();
        const provinceData = await fetchProvince();
        const cityData = await fetchCity();
        const historicalData = await fetchHistorical();
        const UShistoricalData = await fetchUSHistorical();
        const searchCountryData = await searchCountries();

        console.log(countryData);
        console.log(provinceData);
        console.log(cityData);
        console.log(historicalData);
        console.log(UShistoricalData);
        console.log(searchCountryData);

        //const { data } = fetchedData;

       // console.log(fetchedData);

        // for (var key in countryData)
        // {
          
        // }

        this.setState({countryData, provinceData, cityData, UShistoricalData, searchCountryData});
        //console.log(this.state);
        //console.log(this.state);
    }

    handleCountryChange = async (country) => {
        console.log(country);
        const fetchedCountry = await fetchCountry();
        //console.log(fetchedCountry)
        this.setState({ newCountryData: fetchedCountry, country: {country}});
    }

    handleCityChange = async (city) => {
        console.log(city);
        const fetchedCity = await fetchCity();
        //console.log(fetchedCountry)
        this.setState({ newCityData: fetchedCity, city: {city}});
    }

    render() {
        //console.log('boop');
        const data = this.state;
        const country = this.state;
        const city = this.state;
        //console.log(data);
        //console.log(data);
        return (
            <div className="stuff">
                <Leaflet data={data}/>
                <Charts data={data} country={country} city={city}/>
                <SearchBar handleCountryChange = {this.handleCountryChange}/>
                <SearchBar1 handleCityChange = {this.handleCityChange}/>
            </div>
        )
        //<Data />
    }
}

export default App;
