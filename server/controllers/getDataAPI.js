import axios from 'axios';

export const getHeadlinesFromAPI = async (req, res) => {
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=ph&category=General',
      {
        headers: {
          'x-api-key': apiKey,
        },
      }
    );
    const filteredData = response.data.articles.filter(
      (article) => article.urlToImage !== null
    );
    const limitedData = filteredData.slice(0, 3);
    res.json({ articles: limitedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Headlines from API' });
  }
};

export const getPopularHeadlinesFromAPI = async (req, res) => {
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      'https://newsapi.org/v2/everything?q=news%20today&sortBy=popularity&language=en',
      {
        headers: {
          'x-api-key': apiKey,
        },
      }
    );
    const filteredData = response.data.articles.filter(
      (article) => article.urlToImage !== null
    );
    const limitedData = filteredData.slice(0, 4);
    res.json({ articles: limitedData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error fetching popular Headlines from API' });
  }
};

export const getLatestNewsFromAPI = async (req, res) => {
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      'https://newsapi.org/v2/everything?q=news%20today&sortBy=publishedAt&language=en',
      {
        headers: {
          'x-api-key': apiKey,
        },
      }
    );
    const filteredData = response.data.articles.filter(
      (article) => article.urlToImage !== null
    );
    const limitedData = filteredData.slice(0, 4);
    res.json({ articles: limitedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Latest News from API' });
  }
};

export const getEntertainmentNewsFromAPI = async (req, res) => {
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?language=en&category=entertainment',
      {
        headers: {
          'x-api-key': apiKey,
        },
      }
    );
    const filteredData = response.data.articles.filter(
      (article) => article.urlToImage !== null);
    const limitedData = filteredData.slice(0, 10);
    res.json({ articles: limitedData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error fetching Entertainment News from API' });
  }
};
