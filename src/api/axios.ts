import axios from 'axios';

export default axios.create({
    baseURL: 'https://nownews-server.onrender.com/demoapi',
    withCredentials: false,
});