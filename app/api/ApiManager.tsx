import axios, { Axios } from "axios"

const ApiManager = axios.create({
    baseURL: 'https://regres.in/api',
    responseType: 'json',
});

export default ApiManager;