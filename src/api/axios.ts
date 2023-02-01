import axios from 'axios';

const apiKey = '6GuHQUfTaBOCTr-vFAuRD_URIPLu6YTazp6DoKJp9Lw';

export default axios.create({
    baseURL: 'https://api.newscatcherapi.com/v2/',
    withCredentials: true, 
    headers: {
        'x-api-key': apiKey
    }
});