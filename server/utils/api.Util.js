import axios from 'axios';

const getNews = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
    headers: {
      'x-api-key': process.env.API_KEY,
    }
  };
  
  axios.request(getNews).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

  export default getNews;