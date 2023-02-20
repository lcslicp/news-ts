import { useState, useEffect, useMemo, useReducer } from 'react';
import axios from '../api/axios';
import {
  State,
  Action,
  initialState,
  reducer,
} from '../reducers/loadingStates';

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
  const [error, setError] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchApiKey = async () => {
      const { data } = await axios.get('/key');
      localStorage.setItem('apiKey', data.apiKey);
    };

    fetchApiKey();
  });

  const getHeadlines = useMemo(() => {
    async function fetchHeadlines() {
      dispatch({ type: 'SET_LOADING_HEADLINES', loading: true });
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
      dispatch({ type: 'SET_LOADING_HEADLINES', loading: false });
    }
    return fetchHeadlines;
  }, []);

  const getPopularHeadlines = useMemo(() => {
    async function fetchPopularHeadlines() {
      dispatch({ type: 'SET_LOADING_POPULARHEADLINES', loading: true });
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
      dispatch({ type: 'SET_LOADING_POPULARHEADLINES', loading: false });
    }
    return fetchPopularHeadlines;
  }, []);

  const getLatestNews = useMemo(() => {
    async function fetchLatestNews() {
      dispatch({ type: 'SET_LOADING_LATESTNEWS', loading: true });
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
      dispatch({ type: 'SET_LOADING_LATESTNEWS', loading: false });
    }
    return fetchLatestNews;
  }, []);

  const getEntertainmentNews = useMemo(() => {
    async function fetchEntertainmentNews() {
      dispatch({ type: 'SET_LOADING_ENTERTAINMENTNEWS', loading: true });
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
      dispatch({ type: 'SET_LOADING_ENTERTAINMENTNEWS', loading: false });
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
      {error ? (
        <ErrorFetchingAPI />
      ) : (
        <>
          {state.loadingHeadlines ? (
            <LoadingSpinner />
          ) : (
            <Headlines headlines={headlines} />
          )}
          {state.loadingPopularHeadlines && state.loadingLatestNews ? (
            <LoadingSpinner />
          ) : (
            <PopularSection popularnews={popularNews} latestnews={latestNews} />
          )}
          {state.loadingEntertainmentNews ? (
            <LoadingSpinner />
          ) : (
            <Carousel entertainmentnews={entertainmentNews} />
          )}
        </>
      )}
    </main>
  );
};

export default Home;
