import axios from 'axios';

const apiKey = '5cb39d25edd24b2e8e3701110b418107';

export default axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
});