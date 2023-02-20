import axios from 'axios';

export default axios.create({
    baseURL: 'https://nownews-server.onrender.com/api',
    withCredentials: true,
});