import axios from 'axios';

const countryurl = 'https://www.trackcorona.live/api/countries';
const provinceurl = 'https://www.trackcorona.live/api/provinces';
const cityurl = 'https://www.trackcorona.live/api/cities'
const historicalurl = 'https://covid19.mathdro.id/api/daily';
const UShistoricalurl = 'https://api.covidtracking.com/v1/us/daily.json';

export const fetchCountry = async () => {
    try {
        const {data: { data }} = await axios.get(`${countryurl}`);

        return data;

        
    } catch (error) {
        console.log(error);
    }
}

export const fetchProvince = async () => {
    try {
        const {data: { data }} = await axios.get(`${provinceurl}`);


        return data;

        
    } catch (error) {
        console.log(error);
    }
}

export const fetchCity = async () => {
    try {
        const {data: { data }} = await axios.get(`${cityurl}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchHistorical = async () => {
    try {
        const {data} = await axios.get(`${historicalurl}`);
        return data;
    } catch (error) {
        
    }
}

export const fetchUSHistorical = async () => {
    try {
        const {data} = await axios.get(`${UShistoricalurl}`);
        return data;
    } catch (error) {
        
    }
}

export const searchCountries = async () => {
    try {
        // const response = await axios.get(`${countryurl}`);
        // console.log(response);
        const { data: { data } } = await axios.get(`${countryurl}`);
        return data.map((country) => country.location);

    } catch (error) {
        console.log(error);
    }
}

export const searchCities = async () => {
    try {
        const { data: {data } } = await axios.get(`${cityurl}`);
        return data.map((city) => city.location);
    } catch (error) {
        console.log(error);
    }
}
