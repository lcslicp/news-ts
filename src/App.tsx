import { useState, useEffect } from 'react'
import axios from './api/axios'

import Header from './components/Header'
import Headlines from './components/Headlines'
import Secondary from './components/Secondary'
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

export interface Props {
  articles: Article[];
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
  const [articles, setArticles] = useState<Article[]>([]);


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

    setArticles(data?.articles);
    }catch (error) {
      console.log(error)
    
  } 
  }


  useEffect(() => {
    getHeadlines()
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
      articles={articles}
      />
      <Secondary />
      <Sidebar />
      <Carousel />
      <Footer />
    </main>
  )
}

export default App