import { useState, useEffect } from 'react';
import axios from '../api/axios';

import Headlines from '../components/Headlines';
import PopularSection from '../components/PopularSection';
import Carousel from '../components/Carousel';

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface headlines {
  headlines: Article[];
}

export interface newsProps {
  popularnews: Article[];
  latestnews: Article[];
}

export interface entNews {
  entertainmentnews: Article[];
}

const Home = () => {
  const [headlines, setHeadlines] = useState<Article[]>([]);
  const [popularNews, setPopularNews] = useState<Article[]>([]);
  const [latestNews, setLatestNews] = useState<Article[]>([]);
  const [entertainmentNews, setEntertainmentNews] = useState<Article[]>([]);

  useEffect(() => {
    const fetchApiKey = async () => {
      const { data } = await axios.get('/key');
      localStorage.setItem('apiKey', data.apiKey);
    };

    fetchApiKey();
  });

  const getHeadlines = async () => {
    try {
      const apiKey = localStorage.getItem('apiKey');
      const { data } = await axios.get('/headlines', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        withCredentials: true,
      });

      setHeadlines(data?.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularHeadlines = async () => {
    try {
      const apiKey = localStorage.getItem('apiKey');
      const { data } = await axios.get('/popularnews', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        withCredentials: true,
      });

      setPopularNews(data?.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const getLatestNews = async () => {
    try {
      const apiKey = localStorage.getItem('apiKey');
      const { data } = await axios.get('/latestnews', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        withCredentials: true,
      });

      setLatestNews(data?.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const getEntertainmentNews = async () => {
    try {
      const apiKey = localStorage.getItem('apiKey');
      const { data } = await axios.get('/entertainmentnews', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        withCredentials: true,
      });

      setEntertainmentNews(data?.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeadlines();
    getPopularHeadlines();
    getLatestNews();
    getEntertainmentNews();
  }, []);
  return (
    <main>
      <Headlines headlines={headlines} />
      <PopularSection popularnews={popularNews} latestnews={latestNews} />
      <Carousel entertainmentnews={entertainmentNews} />
    </main>
  );
};

export default Home;
