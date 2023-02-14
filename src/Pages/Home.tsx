import { useState, useEffect, useMemo } from 'react';
import axios from '../api/axios';

import Headlines from '../components/feature/Headlines';
import PopularSection from '../components/feature/PopularSection';
import Carousel from '../components/feature/Carousel';

export interface Article {
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

  const getHeadlines = useMemo(() => {
    async function fetchHeadlines() {
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
    }
    return fetchHeadlines;
  }, []);

  const getPopularHeadlines = useMemo(() => {
    async function fetchPopularHeadlines() {
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
    }
    return fetchPopularHeadlines;
  }, []);

  const getLatestNews = useMemo(() => {
    async function fetchLatestNews() {
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
    }
    return fetchLatestNews;
  }, []);

  const getEntertainmentNews = useMemo(() => {
    async function fetchEntertainmentNews() {
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
    }
    return fetchEntertainmentNews;
  }, []);

  useEffect(()=> {
    getHeadlines();
    getPopularHeadlines();
    getLatestNews();
    getEntertainmentNews();
  }, [])

  return (
    <main>
      <Headlines headlines={headlines} />
      <PopularSection popularnews={popularNews} latestnews={latestNews} />
      <Carousel entertainmentnews={entertainmentNews} />
    </main>
  );
};

export default Home;
