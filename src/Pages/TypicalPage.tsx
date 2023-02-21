import { useEffect, useMemo, useState } from 'react';
import axios from '../api/axios';
import styles from '../css/pages/TypicalPage.module.css';
import { Article } from './Home';

import SkeletonLoading from '../components/loading screens/SkeletonLoading';
import ErrorFetchingAPI from '../components/empty UI state/ErrorFetchingAPI';
import NotFound from '../components/empty UI state/NotFound';

const typicalPage = (props: {
  query: string | null;
}) => {
  const [newContent, setNewContent] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getNewsbyCategory = useMemo(() => {
    async function fetchNewsbyCategory() {
      setLoading(true);
      try {
        const { query } = props;
        const { data } = await axios.get('/data');
        setNewContent(data.slice(4, 9));
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    }
    return fetchNewsbyCategory;
  }, []);

  useEffect(() => {
    getNewsbyCategory();
  }, [, props.query]);

  return (
    <section className={styles.container}>
      {loading ? (
        <SkeletonLoading />
      ) : error ? (
        <ErrorFetchingAPI />
      ) : newContent.length === 0 ? (
        <NotFound />
      ) : (
        newContent.map((content) => {
          let publishedAt = new Date(content.publishedAt);
          let date = publishedAt.toLocaleDateString('default', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
          return (
            <div key={content.title} className={styles.article}>
              <span>{date}</span>
                <h2 className={styles.title}>{content.title}</h2>
              <p className={styles.description}>{content.description}</p>
            </div>
          );
        })
      )}
    </section>
  );
};

export default typicalPage;
