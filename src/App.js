import React from 'react';

//import { Data, Leaflet } from './components';
import { Leaflet, Charts } from './components';
import styles from './App.module.css';

import { fetchCountry, fetchProvince, fetchCity, fetchHistorical, fetchUSHistorical} from './api'
import CountryList from './components/Search/CountryList';
import SearchBar from './components/Search/SearchBar';


class App extends React.Component{
    state = {
        countryData: {},
        provinceData: {},
        cityData: {},
        stats:[],
        searchField: ''

    }

    async componentDidMount() {
        const countryData = await fetchCountry();
        const provinceData = await fetchProvince();
        const cityData = await fetchCity();
        const historicalData = await fetchHistorical();
        const UShistoricalData = await fetchUSHistorical();

        console.log(countryData);
        console.log(provinceData);
        console.log(cityData);
        console.log(historicalData);
        console.log(UShistoricalData);

        //const { data } = fetchedData;

       // console.log(fetchedData);

        // for (var key in countryData)
        // {
          
        // }

        const resp = await fetch('https://api.covid19api.com/countries')
        const countries = await resp.json()
        this.setState({countries})
        this.state.countries.forEach(async country => {
            const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
            const data = await resp.json()
            if(data.length)
            this.setState(prevState => (
                {stats:prevState.stats.concat({...data[data.length - 1],CountryCode:country.ISO2})}
      ))
    })

        this.setState({countryData, provinceData, cityData, UShistoricalData});
        //console.log(this.state);
        //console.log(this.state);
    }

    handleChange = (e) =>{
        this.setState({searchField:e.target.value})
      }

    render() {
        const {stats,searchField} = this.state
        const filteredCountries = stats.filter(country =>(
        country.Country.toLowerCase().includes(searchField.toLowerCase())
            ))
        //console.log('boop');
        const data = this.state;
        //console.log(data);
        //console.log(data);
        return (
            <div className="stuff">
                <Leaflet data={data}/>
                <Charts data={data}/>
                <SearchBar placeholder = 'Enter Country Name' handleChange = {this.handleChange}/>
                <CountryList stats = {filteredCountries}/>
            </div>
        )
        //<Data />
    }
}

export default App;
