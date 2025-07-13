import { useState, useEffect, useReducer } from 'react';
import axios from '../api/axios';
import {
  initialState,
  reducer,
} from '../reducers/loadingStates';

import Headlines from '../components/feature/Headlines';
import PopularSection from '../components/feature/PopularSection';
import EntNews from '../components/feature/EntNews';
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


  const baseURL = 'https://nownews-server.onrender.com/api';

  useEffect(() => {

    const fetchNewsData = async () => {
      dispatch({ type: 'SET_LOADING_HEADLINES', loading: true })
      dispatch({ type: 'SET_LOADING_POPULARHEADLINES', loading: true })
      dispatch({ type: 'SET_LOADING_LATESTNEWS', loading: true })
      dispatch({ type: 'SET_LOADING_ENTERTAINMENTNEWS', loading: true })
      try {
        const [headlinesRes, popularHeadlinesRes, latestNewsRes, entertainmentNewsRes] = await Promise.all([
          axios.get(`${baseURL}/headlines`, {
            withCredentials: true,
          }),
          axios.get(`${baseURL}/popularnews`, {
            withCredentials: true,
          }),
          axios.get(`${baseURL}/latestnews`, {
            withCredentials: true,
          }),
          axios.get(`${baseURL}/entertainmentnews`, {
            withCredentials: true,
          }),
        ])

        setHeadlines(headlinesRes.data?.articles);
        setPopularNews(popularHeadlinesRes.data?.articles)
        setLatestNews(latestNewsRes.data?.articles)
        setEntertainmentNews(entertainmentNewsRes.data?.articles)
       
      } catch (error) {
        console.log(error);
        setError(true)
      }

      dispatch({ type: 'SET_LOADING_HEADLINES', loading: false })
      dispatch({ type: 'SET_LOADING_POPULARHEADLINES', loading: false })
      dispatch({ type: 'SET_LOADING_LATESTNEWS', loading: false })
      dispatch({ type: 'SET_LOADING_ENTERTAINMENTNEWS', loading: false })
    };

    fetchNewsData();
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
            <EntNews entertainmentnews={entertainmentNews}/>
          )}
        </>
      )}
    </main>
  );
};

export default Home;
