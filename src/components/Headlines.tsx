import React from 'react';
import { Props } from '../App';
import styles from '../css/Headlines.module.css';

const Headlines: React.FC<Props> = ({ articles }) => {
  return (
    <section className={styles.container}>
      {articles.map((article) => {
        let publishedAt = new Date(article.publishedAt);
        let date = publishedAt.toLocaleDateString('default', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });

        return (
          <div className={styles.article}>
            <div className={styles.text}>
            <a href={article.url} key={article.title} target='_blank'>
              <h3 className={styles.headline}>
                {article.title}
              </h3>
              </a>
              <p className={styles.description}>
                {article.description.substring(0, 91)}...
              </p>
              <span className={styles.description}>{date}</span>
            </div>
            <a href={article.url} key={article.title} target='_blank'>
            <img
              src={article.urlToImage}
              alt={article.title}
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
