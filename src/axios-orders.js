import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vehicle-3deea.firebaseio.com/'
});

export default instance;
