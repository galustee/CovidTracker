import React from 'react';

import { Data } from './components';

import { fetchApi, fetchCases} from './api'



class App extends React.Component{

    async componentDidMount() {
        const data = await fetchApi();
        const country = data[0];
        const cases = await fetchCases(data[0]);
        console.log(data);
        console.log('Cases in ' + country + ': ' + cases);
    }

    render() {
        return (
            <div>
                <Data />
            </div>
        )
    }
}

export default App;