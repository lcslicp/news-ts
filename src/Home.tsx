import React from 'react'

import Header from './components/Header'
import Headlines from './components/Headlines'
import Secondary from './components/Secondary'
import Sidebar from './components/Sidebar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

const Home = () => {
  return (
    <main>
      <Header />
      <Headlines />
      <Secondary />
      <Sidebar />
      <Carousel />
      <Footer />
    </main>
  )
}

export default Home