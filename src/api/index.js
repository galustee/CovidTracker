import axios from 'axios';

const countryurl = 'https://www.trackcorona.live/api/countries';
const provinceurl = 'https://www.trackcorona.live/api/provinces';
const cityurl = 'https://www.trackcorona.live/api/cities'

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

