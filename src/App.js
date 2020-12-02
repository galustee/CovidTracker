import React from 'react';

//import { Data, Leaflet } from './components';
import { Leaflet } from './components';
import styles from './App.module.css';

import { fetchCountry, fetchProvince, fetchCity} from './api'



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

        console.log(countryData);
        console.log(provinceData);
        console.log(cityData);

        //const { data } = fetchedData;

       // console.log(fetchedData);

        for (var key in countryData)
        {
          
        }


        this.setState({countryData, provinceData});
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
                <Leaflet data={data}/>
            </div>
        )
        //<Data />
    }
}

export default App;