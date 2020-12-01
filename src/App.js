import React from 'react';

//import { Data, Leaflet } from './components';
import { Leaflet } from './components';
import styles from './App.module.css';

import { fetchApi, fetchCases} from './api'



class App extends React.Component{
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchApi();
       // console.log(fetchedData);
        const parsedData = {};

        for (var key in fetchedData) {
            //console.log(key);
            for (var key2 in fetchedData[key])
            {
                //console.log(fetchedData[key][key2])
                if (key2 === "All"){
                    // gets countries
                   // console.log(fetchedData[key][key2])
                    parsedData[fetchedData[key][key2].country] = fetchedData[key][key2];
                }
                else {
                    // gets non countries
                   // console.log(key2);
                    parsedData[key2] = fetchedData[key][key2];
                }
                //console.log(key2);
            }

        }
        //console.log(parsedData);

        this.setState(parsedData)
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