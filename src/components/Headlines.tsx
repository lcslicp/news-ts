import React from 'react';
import { Props } from '../App';
import styles from '../css/Headlines.module.css';

const Headlines: React.FC<Props> = ({ articles }) => {
  return (
    <section className={styles.container}>
      {articles.map((article) => (
        <div key={article.title}>
          <div className={styles.text}>
            <h3 className={styles.headline}>
              {article.title}
            </h3>
            <p className={styles.article}>{article.description}</p>
            <p className={styles.article}>{article.publishedAt}</p>
          </div>
          <img
            src={article.urlToImage}
            alt={article.title}
            className={styles.image}
          />
        </div>
      ))}
    </section>
  );
};

export default Headlines;
