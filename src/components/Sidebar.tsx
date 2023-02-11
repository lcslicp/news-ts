import React from 'react';
import { newsProps } from '../App';
import styles from '../css/Sidebar.module.css';

const Sidebar = (props: newsProps) => {
  return (
    <section className={styles.container}>
      <h4 className={styles.tab}>Latest News</h4>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        {props.latestnews.map((news) => {
          let publishedAt = new Date(news.publishedAt);
          let date = publishedAt.toLocaleDateString('default', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
          return (
            <div key={news.title} className={styles.article}>
              <span className={styles.date}>{date}</span>
              <a href={news.url} target='_blank'><h4 className={styles.title}>{news.title}</h4></a>
              <p className={styles.description}>
                {news.description.substring(0, 180)}...
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
