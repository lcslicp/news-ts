import React from 'react';
import { popNews } from '../App';
import styles from '../css/PopularSection.module.css';

const PopularSection: React.FC<popNews> = ({ popularnews }) => {
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <h2>Popular News</h2>
        <p>View More</p>
      </div>
      <div className={styles.articleContainer}>
        {popularnews.map((news) => {
          let publishedAt = new Date(news.publishedAt);
          let date = publishedAt.toLocaleDateString('default', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
          return (
            <div key={news.title} className={styles.article}>
              <div className={styles.innerItem}>
                <p>
                  {news.author} &#183; <span>{date}</span>
                </p>
                <div className={styles.mainContent}>
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    className={styles.image}
                  />
                  <div className={styles.text}>
                  <a href={news.url} target='_blank' className={styles.title}>
                    <h3>{news.title}</h3>
                  </a>
                  <p className={styles.description}>{news.description}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularSection;
