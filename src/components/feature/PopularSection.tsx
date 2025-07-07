import { newsProps } from '../../Pages/Home';
import styles from '../../css/feature/PopularSection.module.css';
import PopNews from './PopNews';
import thumbnail from '../../assets/thumbnail-placeholder.jpg'

const PopularSection = (props: newsProps) => {
  return (
    <section className={styles.popnewsSection}>
      <div className={styles.latestContainer}>
        <div className={styles.sectionTitle}>
          <h4>Latest News</h4>
          <span></span>
        </div>
        <div className={styles.articleContainer}>
          {props.latestnews.map((news, index) => {
            let publishedAt = new Date(news.publishedAt);
            let date = publishedAt.toLocaleDateString('default', {
              month: 'short',
              day: 'numeric',
             year: 'numeric',
            });
            let title = news.title.length >= 80 ? news.title.slice(0, 80) + "..." : news.title;

            let fixOrphan = (text:string) => {
              const lastSpaceIndex = text.trim().lastIndexOf(" ");
              if (lastSpaceIndex === -1) return text;
    
              return (
                text.slice(0, lastSpaceIndex) + "\u00A0" + text.slice(lastSpaceIndex + 1)
              )
            }
            let description = fixOrphan(news.description)

            return (
              <div key={news.url}
                   className={styles.article}>
                <img src={news.urlToImage} alt={news.title} className={`${styles.img} ${index !== 2 ? styles.hidden : ''}`}/>
                <span className={styles.date}>{date} &nbsp; | &nbsp; {news.author}</span>
                <a href={news.url} target='_blank'>
                  <h5>{title}</h5>
                </a>
                <p lang='en'>{description}</p>
            </div>
          );
        })}
      </div>
      </div>
    <PopNews popularnews={props.popularnews} latestnews={props.latestnews || ''}  />
    </section>
  );
};

export default PopularSection;
