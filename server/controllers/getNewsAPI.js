import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.API_KEY;

export const getHeadlinesFromAPI = async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        apiKey,
        q: 'ph',
        language: 'en'
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
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey,
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
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        apiKey,
        q: 'news today',
        sortBy: 'popularity',
        language: 'en',
      },
    });
    const filteredData = response.data.articles.filter(
      (article) => article.urlToImage !== null
    );
    const limitedData = filteredData.slice(0, 5);
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
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        apiKey,
        q: 'news today',
        sortBy: 'publishedAt',
        language: 'en',
      },
    });
    const placeholder = "images/thumbnail-placeholder.jpg";
    const limitedData = response.data.articles.slice(0, 5);
    const filteredData = limitedData.filter(
      (article) => article.description !== null);
    const normalizedData = filteredData.map(article => ({
      ...article,
      urlToImage: article.urlToImage || placeholder
    }))
    res.json({ articles: normalizedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Latest News from API' });
  }
};

export const getEntertainmentNewsFromAPI = async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey,
        language: 'en',
        category: 'entertainment',
        sortBy: 'popularity',
      },
    });
    const placeholder = "images/thumbnail-placeholder.jpg";
    const normalizedData = response.data.articles.map(article => ({
      ...article,
      urlToImage: article.urlToImage || placeholder
    }))
    const limitedData = normalizedData.slice(0, 4);
    res.json({ articles: limitedData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error fetching Entertainment News from API' });
  }
};
