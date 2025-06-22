import { newsProps } from '../../Pages/Home';
import styles from '../../css/feature/PopNews.module.css';

const PopNews = (props: newsProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionTitle}>
          <h4>Popular News</h4>
          <span></span>
        </div>
      <div className={styles.articles}>
        {props.popularnews.map((news, index) => {
          let publishedAt = new Date(news.publishedAt);
          let date = publishedAt.toLocaleDateString('default', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
          return (
            <div key={news.title}
                 className={styles.article}>
              <img src={news.urlToImage} alt={news.title} className={`${styles.img} ${index !== 0 ? styles.hidden : ''}`} />
              <div className={styles.content}>
                <span>{date}</span>
                <a href={news.url}>
                  <h5>{news.title}</h5>
                </a>
                <p lang='en'>{news.description}</p>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopNews;
