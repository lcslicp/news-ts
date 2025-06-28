import React from 'react';
import { entNews } from '../../Pages/Home';
import styles from '../../css/feature/EntNews.module.css';

const Carousel: React.FC<entNews> = ({ entertainmentnews }) => {
  return (
    <section>
      <div className={styles.sectionTitle}>
        <h4>Entertainment News</h4>
        <span></span>
      </div>
    <div className={styles.container}>
      <div className={styles.articles}>
        {entertainmentnews.map((news, index) => {
           let publishedAt = new Date(news.publishedAt)
           let date = publishedAt.toLocaleDateString (
            'default', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }
           )
           let fixOrphan = (text:string) => {
            const lastSpaceIndex = text.trim().lastIndexOf(' ');
            if (lastSpaceIndex === -1) return text;

            return (
              text.slice(0, lastSpaceIndex) +
              '\u00A0' + text.slice(lastSpaceIndex + 1)
            )
           }
           let description = fixOrphan(news.description)

          return (
            <div key={index} className={styles.article}>
              <img src={news.urlToImage} alt={news.title} />
              <span>{date}</span>
                <a href={news.title} target='_blank'>
                  <h5 className={styles.title}>{news.title}</h5>
                </a>
                <p lang='en'>{description}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.puzzleContainer}>

      </div>
    </div>
    </section>
  );
};

export default Carousel;
