import axios from 'axios';

const countryurl = 'https://www.trackcorona.live/api/countries';
const provinceurl = 'https://www.trackcorona.live/api/provinces';
const cityurl = 'https://www.trackcorona.live/api/cities'
const historicalurl = 'https://covid19.mathdro.id/api/daily';
const generalURL = 'https://covid19.mathdro.id/api'

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
        
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchGeneral = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(`${generalURL}`);

        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        
    }
}