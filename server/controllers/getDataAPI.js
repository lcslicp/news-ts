import axios from 'axios';

export const getHeadlinesFromAPI = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        country: 'ph',
        category: 'General',
      },
    });
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

export const getHeadlinesbyCategoryFromAPI = async (req, res) => {
  try {
    const category = req.query.category;
    const query = req.query.q;
    const apiKey = process.env.API_KEY;
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        category: category,
        language: 'en',
        q: query,
      },
    });
    const limitedData = response.data.articles.slice(0, 5);
    res.json({ articles: limitedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching news from API' });
  }
};

export const getPopularHeadlinesFromAPI = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const response = await axios.get('https://newsapi.org/v2/everything', {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        q: 'news today',
        sortBy: 'popularity',
        language: 'en',
      },
    });
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
  try {
    const apiKey = process.env.API_KEY;
    const response = await axios.get('https://newsapi.org/v2/everything', {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        q: 'news today',
        sortBy: 'publishedAt',
        language: 'en',
      },
    });
    const limitedData = response.data.articles.slice(0, 3);
    res.json({ articles: limitedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Latest News from API' });
  }
};

export const getEntertainmentNewsFromAPI = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        language: 'en',
        category: 'entertainment',
        sortBy: 'popularity',
      },
    });
    const filteredData = response.data.articles.filter(
      (article) => article.urlToImage !== null
    );
    const limitedData = filteredData.slice(0, 10);
    res.json({ articles: limitedData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error fetching Entertainment News from API' });
  }
};
