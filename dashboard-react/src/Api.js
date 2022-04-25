import axios from 'axios'

const Api = axios.create({
    baseURL: "http://localhost:8002/"
});
const ApiCln = axios.create({
    baseURL: "http://192.168.1.36/registros/"
});

const ApiLogin = axios.create({
    baseURL: "http://192.168.1.36:1234/usuarios/"
});



export default {Api, ApiCln, ApiLogin};