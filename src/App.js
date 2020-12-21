import React from 'react';


import { Leaflet } from './components';
import styles from './App.module.css';

import { fetchCountry, fetchProvince, fetchCity, fetchHistorical, fetchGeneral } from './api'
import { Chart, CountryPicker } from './components'



class App extends React.Component{
    state = {
        countryData: {},
        provinceData: {},
        cityData: {},
        general: {}
    }

    async componentDidMount() {
        const countryData = await fetchCountry();
        const provinceData = await fetchProvince();
        const cityData = await fetchCity();
        const historicalData = await fetchHistorical();

        const generalData = await fetchGeneral();
        this.setState({eData: generalData})

        console.log(countryData);
        console.log(provinceData);
        console.log(cityData);
        console.log(historicalData); 
        console.log(generalData);


        this.setState({countryData, provinceData});

    }

    render() {

        const data = this.state;
        const {eData} = this.state;
        

        return (
            <div className="stuff">
                <Leaflet data={data}/>
                <CountryPicker data={eData} />
                <Chart />
            </div>
        )
        
    }
}

export default App;