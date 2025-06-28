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

          let fixOrphan = (text:string) => {
            const lastSpaceIndex = text.trim().lastIndexOf(' ');
            if (lastSpaceIndex === -1) return text;
  
            return (
              text.slice(0, lastSpaceIndex) + '\u00A0' + text.slice(lastSpaceIndex + 1)
            )
          }
          let description = fixOrphan(news.description)

          return (
            <div key={index}
                 className={styles.article}>
              <img src={news.urlToImage} alt={news.title} className={`${styles.img} ${index > 1 ? styles.hidden : ''}`} />
              <div className={styles.content}>
                <span>{date}</span>
                <a href={news.url} target='_blank'>
                  <h5 className={index === 0 ? styles.firstTitle : styles.title}>{news.title}</h5>
                </a>
                <p lang='en'>{description}</p>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopNews;
