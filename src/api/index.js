import axios from 'axios';

const url = 'https://cors-anywhere.herokuapp.com/' + 'https://covid-api.mmediagroup.fr/v1/cases';

export const fetchApi = async () => {
    try {
        const {data} = await axios.get(`${url}`);

        return Object.keys(data).map((data) => data);

        
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