import axios from 'axios';

export default axios.create({
    baseURL: 'https://nownews-demo.onrender.com/api',
    withCredentials: false,
});