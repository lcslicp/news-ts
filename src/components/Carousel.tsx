import React, { useState } from 'react';
import { entNews } from '../App';
import styles from '../css/Carousel.module.css';

const Carousel: React.FC<entNews> = ({ entertainmentnews }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [translateX, setTranslateX] = useState('translateX(0%)');

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex - 5 < 0 ? 0 : currentImageIndex - 5);
  };

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex + 5 > entertainmentnews.length - 5 ? currentImageIndex : currentImageIndex + 5);
  };


  return (
    <section className={styles.container}>
      <div className={styles.sectionTitle}>
        <h4 className={styles.tab}>Entertainment News</h4>
        <a className={styles.link}>See All &#187;</a>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.scroll}>
        <button onClick={handlePrevClick} className={styles.btnPrev} disabled={currentImageIndex == 0 ? true : false}>
          &#171;
        </button>
        <div
          className={styles.carousel}  style={{transform: translateX}}>
          {entertainmentnews
            .slice(currentImageIndex, currentImageIndex + 5)
            .map((news) => {
              let publishedAt = new Date(news.publishedAt);
              let date = publishedAt.toLocaleDateString('default', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });
              return (
                <div key={news.title} className={styles.article}>
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    className={styles.image}
                  />
                  <span>{date}</span>
                  <a href={news.url} target='_blank'>
                    <h3 className={styles.title}>{news.title}</h3>
                  </a>
                </div>
              );
            })}
        </div>
        <button onClick={handleNextClick} className={styles.btnNext} disabled={currentImageIndex > 0 ? true : false}>
          &#187;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
