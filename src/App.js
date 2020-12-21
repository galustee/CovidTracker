import React from 'react';

//import { Data, Leaflet } from './components';
import { Leaflet, Charts, SearchBar } from './components';
import styles from './App.module.css';

import { fetchCountry, fetchProvince, fetchCity, fetchHistorical, fetchUSHistorical, searchCountries} from './api';


class App extends React.Component{
    state = {
        countryData: {},
        provinceData: {},
        cityData: {},
        country: '',
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
        //console.log(country);
        const fetchedCountry = await fetchCountry(country);
        console.log(fetchedCountry)
        //this.setState({ data: fetchedCountry, country: country});
    }

    render() {
        //console.log('boop');
        const data = this.state;
        //console.log(data);
        //console.log(data);
        return (
            <div className="stuff">
                <Leaflet data={data}/>
                <Charts data={data} />
                <SearchBar handleCountryChange = {this.handleCountryChange}/>
            </div>
        )
        //<Data />
    }
}

export default App;
