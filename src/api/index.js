import axios from 'axios';

const url = 'https://www.trackcorona.live/api/countries';

export const fetchApi = async () => {
    try {
        const {data: { data }} = await axios.get(`${url}`);


        return data;

        
    } catch (error) {
        console.log(error);
    }
}

export const fetchCases = async (country) => {
    try {
        const { data: { All: { confirmed}} } = await axios.get( `${url}?country=${country}`)
        return confirmed;
    } catch (error) {
        console.log(error);
    }
}