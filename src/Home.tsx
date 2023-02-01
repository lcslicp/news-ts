import { useState, useEffect } from 'react'
import axios from './api/axios'

import Header from './components/Header'
import Headlines from './components/Headlines'
import Secondary from './components/Secondary'
import Sidebar from './components/Sidebar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


function Home () {
  const [articles, setArticles] = useState<string[]>([]);
  // const [title, setTitle] = useState<string>('');
  // const [summary, setSummary] = useState<string>('');
  // const [photo, setPhoto] = useState<string>('');

  const getHeadlines = async () => {
    const { data } = await axios.get('/latest_headlines?countries=US&topic=business');

    setArticles(data?.articles[0].title);
      console.log(articles);
      
      // setTitle(response?.data?.articles.title);
      // setSummary(response?.data?.articles.summary);
      // setPhoto(response?.data?.articles.media);
  }

  useEffect(() => {
    getHeadlines()
  }, [])
  
  
  return (
    <main>
      <Header />
      <Headlines
      // articles={articles}
      // setTitle={title}
      // setSummary={summary}
      // setPhoto={photo}
      />
      <Secondary />
      <Sidebar />
      <Carousel />
      <Footer />
    </main>
  )
}

export default Home