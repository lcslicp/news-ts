import axios from 'axios';

export default axios.create({
    baseURL: 'https://news-ts-production.up.railway.app/api',
    withCredentials: true,
});
