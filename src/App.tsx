import { useState, useEffect } from 'react'
import axios from './api/axios'

import Header from './components/Header'
import Headlines from './components/Headlines'
import PopularSection from './components/PopularSection'
import Sidebar from './components/Sidebar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

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

export interface popNews {
  popularnews: Article[];
}

interface nav {
  id: number,
  href: string,
  label: string,
}

export interface navProps {
  links: nav[]
}

function App () {
  const [headlines, setHeadlines] = useState<Article[]>([]);
  const [popularNews, setPopularNews] = useState<Article[]>([]);


  useEffect(() => {
    const fetchApiKey = async () => {
      const { data } = await axios.get('/key');
      localStorage.setItem('apiKey', data.apiKey);
    }

    fetchApiKey();
  })

  const getHeadlines = async () => {

    try {
      const apiKey = localStorage.getItem('apiKey');
    const { data } = await axios.get(
      '/headlines',
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        withCredentials: true,
      }
    );

    setHeadlines(data?.articles);
    }catch (error) {
      console.log(error)
    
  } 
  }

  const getPopularHeadlines = async () => {

    try {
      const apiKey = localStorage.getItem('apiKey');
    const { data } = await axios.get(
      '/popularnews',
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        withCredentials: true,
      }
    );

    setPopularNews(data?.articles);
    }catch (error) {
      console.log(error)
    
  } 
  }

  useEffect(() => {
    getHeadlines()
    getPopularHeadlines()
  }, [])

  const navLinks = [
    {id: 1, href: '/', label: 'Home'},
    {id: 2, href: '/business', label: 'Business'},
    {id: 3, href: '/health', label: 'Health'},
    {id: 4, href: '/entertainment', label: 'Entertainment'},
    {id: 5, href: '/sports', label: 'Sports'}
  ]
  
  
  return (
    <main>
      <Header links={navLinks} />
      <Headlines
      headlines={headlines}
      />
      <PopularSection
      popularnews={popularNews} />
      <Sidebar />
      <Carousel />
      <Footer />
    </main>
  )
}

export default App