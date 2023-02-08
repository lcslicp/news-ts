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
          let title = news.title;

          return (
            <div key={news.title} className={styles.article}>
              <div className={styles.innerItem}>
                <p className={styles.author}>
                  {news.author} &#183; <span>{date}</span>
                </p>
                <div
                  className={
                    popularnews[0].title !== title
                      ? `${styles.secondaryContent}`
                      : `${styles.mainContent}`
                  }
                >
                  <img
                    src={news.urlToImage}
                    alt={title}
                    className={
                      popularnews[0].title !== title
                        ? `${styles.image}`
                        : `${styles.imageMain}`
                    }
                  />
                  <div
                    className={
                      popularnews[0].title !== title
                        ? `${styles.text}`
                        : `${styles.textMain}`
                    }
                  >
                    <a
                      href={news.url}
                      target='_blank'
                      className={
                        popularnews[0].title !== title
                          ? `${styles.title}`
                          : `${styles.titleMain}`
                      }
                    >
                      <h3>{title}</h3>
                    </a>
                    <p
                      className={
                        popularnews[0].title !== title
                          ? `${styles.description}`
                          : `${styles.descriptionMain}`
                      }
                    >
                      {news.description.substring(0, 190)}...
                    </p>
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
