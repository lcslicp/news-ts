import React from 'react';
import { newsProps } from '../Pages/Home';
import styles from '../css/PopularSection.module.css';
import Sidebar from './Sidebar';

const PopularSection = (props: newsProps) => {
  return (
    <section className={styles.popnews}>
    <section className={styles.container}>
      <div className={styles.sectionTitle}>
        <h4 className={styles.tab}>Popular News</h4>
        <a className={styles.link}>See All &#187;</a>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.articleContainer}>
        {props.popularnews.map((news) => {
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
                    props.popularnews[0].title !== title
                      ? `${styles.secondaryContent}`
                      : `${styles.mainContent}`
                  }
                >
                  <img
                    src={news.urlToImage}
                    alt={title}
                    loading='lazy'
                    className={
                      props.popularnews[0].title !== title
                        ? `${styles.image}`
                        : `${styles.imageMain}`
                    }
                  />
                  <div
                    className={
                      props.popularnews[0].title !== title
                        ? `${styles.text}`
                        : `${styles.textMain}`
                    }
                  >
                    <a
                      href={news.url}
                      target='_blank'
                      className={
                        props.popularnews[0].title !== title
                          ? `${styles.title}`
                          : `${styles.titleMain}`
                      }
                    >
                      <h3>{title}</h3>
                    </a>
                    <p
                      className={
                        props.popularnews[0].title !== title
                          ? `${styles.description}`
                          : `${styles.descriptionMain}`
                      }
                    >
                      {props.popularnews[0].title !== title
                          ? news.description.substring(0, 220) : news.description.substring(0, 255)}...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    <Sidebar latestnews={props.latestnews} popularnews={props.popularnews || ''}  />
    </section>
  );
};

export default PopularSection;
