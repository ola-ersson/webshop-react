import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://medieinstitutet-wie-products.azurewebsites.net/api/'
})

export default instance;