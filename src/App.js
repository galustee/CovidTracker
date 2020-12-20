import React from 'react';

//import { Data, Leaflet } from './components';
import {Cards, Leaflet, Charts } from './components';
import styles from './App.module.css';

import { fetchCountry, fetchProvince, fetchCity, fetchHistorical} from './api'



class App extends React.Component{

    
    state = {
        countryData: {},
        provinceData: {},
        cityData: {},
       
        
    }

    async componentDidMount() {
        const countryData = await fetchCountry();
        const provinceData = await fetchProvince();
        const cityData = await fetchCity();
        const historicalData = await fetchHistorical();

       
        

        console.log(countryData);
        console.log(provinceData);
        console.log(cityData);
        console.log(historicalData);
        

       
        

       // console.log(fetchedData);

        for (var key in countryData)
        {
          
        }


        this.setState({countryData, provinceData, cityData});
        //console.log(this.state);
        //console.log(this.state);
    }

    render() {
        //console.log('boop');
        
        const data = this.state;
        //console.log(data);
        //console.log(data);
        return (
            <div className="stuff">
                <Cards data = {data}/>
                <Leaflet data={data}/>
                <Charts data={data}/>
            </div>
        )
        //<Data />
    }
}

export default App;