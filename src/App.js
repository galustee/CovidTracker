import React from 'react';

//import { Data, Leaflet } from './components';
import {Cards, Leaflet, Charts, Projected, Chart, MoreCharts } from './components';
import {default as SearchBar, SearchBar1 } from './components/Search/SearchBar';
import './App.module.css';

import { fetchCountry, fetchProvince, fetchCity, fetchHistorical, fetchWorldData, fetchGeneral} from './api'

class App extends React.Component{
    
    state = {
        countryData: {},
        provinceData: {},
        cityData: {},
        worldData: {},
        country: '',
        newCountryData: {},
        newCityData: {},
        city: '',
    }

    async componentDidMount() {
        const countryData = await fetchCountry();
        const provinceData = await fetchProvince();
        const cityData = await fetchCity();
        const historicalData = await fetchHistorical();
        const worldData = await fetchWorldData();

        const generalData = await fetchGeneral();

              

        //console.log(countryData);
        //console.log(provinceData);
       // console.log(cityData);
        //console.log(historicalData);
       // console.log(worldData);
       //console.log(generalData);
              

       // console.log(fetchedData);


        this.setState({countryData, provinceData, cityData, worldData});
        //console.log(this.state);
        //console.log(this.state);
    }

    handleCountryChange = async (country) => {
        //console.log(country);
        const fetchedCountry = await fetchCountry(country);
        console.log(fetchedCountry)
        this.setState({newCountryData: fetchedCountry, country: {country}});
    }

    handleCityChange = async (city) => {
        //console.log(city);
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
                <Cards data = {data}/>
                <Leaflet data={data}/>
                <Charts data={data} country={country}/>
                <Projected data = {data}/>
                <Chart />
                <SearchBar handleCountryChange = {this.handleCountryChange}/>
                <SearchBar1 handleCityChange = {this.handleCityChange}/>
                <MoreCharts data={data} country={country} city={city}/>
            </div>
        )
        //<Data />
    }
}

export default App;