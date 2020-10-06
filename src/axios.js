import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-myrestaurant-d873f.cloudfunctions.net/api'
});

export default instance;