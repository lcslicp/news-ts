import React from 'react';
import { headlines } from '../../Pages/Home';
import styles from '../../css/feature/Headlines.module.css';

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
        let title = headline.title;
        let fixOrphan = (text:string) => {
          const lastSpaceIndex = text.trim().lastIndexOf(" ");
          if (lastSpaceIndex === -1) return text;

          return (
            text.slice(0, lastSpaceIndex) + "\u00A0" + text.slice(lastSpaceIndex + 1)
          )
        }
        let description = fixOrphan(headline.description)

        return (
          <div className={styles.article} key={title}>
            <div className={styles.imgContainer}>
              <a href={headline.url} key={headline.title} target='_blank'>
                <img
                  src={headline.urlToImage}
                  alt={title}
                  className={styles.image}
                  loading='lazy'/>
              </a>
            </div>
            <div className={styles.text}>
               <span className={styles.date}>{date} &nbsp; | &nbsp; {headline.author}</span>
              <a href={headline.url} target='_blank' className={styles.link}>
                <h3
                  className={
                    headlines[0].title === title
                      ? `${styles.headline}`
                      : `${styles.headlineSecondary}`}>
                  {title}
                </h3>
              </a>
              <p lang='en' className={styles.description}>
                {description}...
              </p>
            </div>
        </div>
        );
      })}
    </section>
  );
};

export default Headlines;
