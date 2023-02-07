import React from 'react';
import { headlines } from '../App';
import styles from '../css/Headlines.module.css';

const Headlines: React.FC<headlines> = ({ headlines }) => {
  return (
    <section className={styles.container}>
      {headlines.map((headline) => {
        let publishedAt = new Date(headline.publishedAt);
        let date = publishedAt.toLocaleDateString('default', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });

        return (
          <div className={styles.article}>
            <div className={styles.text}>
            <a href={headline.url} key={headline.title} target='_blank'>
              <h3 className={styles.headline}>
                {headline.title}
              </h3>
              </a>
              <p className={styles.description}>
                {headline.description.substring(0, 91)}...
              </p>
              <span className={styles.description}>{date}</span>
            </div>
            <a href={headline.url} key={headline.title} target='_blank'>
            <img
              src={headline.urlToImage}
              alt={headline.title}
              className={styles.image}
            />
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Headlines;
