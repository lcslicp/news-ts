import React from 'react'
import { entNews } from '../App'
import styles from '../css/Carousel.module.css'

const Carousel:React.FC<entNews>= ({ entertainmentnews }) => {
  return (
    <section className={styles.container}>
        {entertainmentnews.map((news) => (
          <div key={news.title} className={styles.article}>
            <img src={news.urlToImage} alt={news.title} className={styles.image} />
            <h4>{news.title}</h4>
            </div>
        ))}
        <p>Carousel</p>
    </section>
  )
}

export default Carousel