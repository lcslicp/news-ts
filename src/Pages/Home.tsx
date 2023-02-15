import { useState, useEffect, useMemo } from 'react';
import axios from '../api/axios';

import Headlines from '../components/feature/Headlines';
import PopularSection from '../components/feature/PopularSection';
import Carousel from '../components/feature/Carousel';
import LoadingSpinner from '../components/loading screens/LoadingSpinner';
import ErrorFetchingAPI from '../components/empty UI state/ErrorFetchingAPI';

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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchApiKey = async () => {
      const { data } = await axios.get('/key');
      localStorage.setItem('apiKey', data.apiKey);
    };

    fetchApiKey();
  });

  const getHeadlines = useMemo(() => {
    async function fetchHeadlines() {
      setLoading(true);
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
        setError(true);
      }
      setLoading(false);
    }
    return fetchHeadlines;
  }, []);

  const getPopularHeadlines = useMemo(() => {
    async function fetchPopularHeadlines() {
      setLoading(true);
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
        setError(true);
      }
      setLoading(false);
    }
    return fetchPopularHeadlines;
  }, []);

  const getLatestNews = useMemo(() => {
    async function fetchLatestNews() {
      setLoading(true);
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
        setError(true);
      }
      setLoading(false);
    }
    return fetchLatestNews;
  }, []);

  const getEntertainmentNews = useMemo(() => {
    async function fetchEntertainmentNews() {
      setLoading(true);
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
      setLoading(false);
    }
    return fetchEntertainmentNews;
  }, []);

  useEffect(() => {
    getHeadlines();
    getPopularHeadlines();
    getLatestNews();
    getEntertainmentNews();
  }, []);

  return (
    <main>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorFetchingAPI />
      ) : (
        <>
          <Headlines headlines={headlines} />
          <PopularSection popularnews={popularNews} latestnews={latestNews} />
          <Carousel entertainmentnews={entertainmentNews} />{' '}
        </>
      )}
    </main>
  );
};

export default Home;
