import { useEffect, useMemo, useState } from 'react';
import axios from '../api/axios';
import styles from '../css/pages/TypicalPage.module.css';
import { Article } from './Home';

import SkeletonLoading from '../components/loading screens/SkeletonLoading';
import ErrorFetchingAPI from '../components/empty UI state/ErrorFetchingAPI';
import NotFound from '../components/empty UI state/NotFound';

const typicalPage = (props: {
  categoryQuery: string | null;
  query: string | null;
}) => {
  const [newContent, setNewContent] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const baseURL = 'https://news-ts-production.up.railway.app/api';

  const getNewsbyCategory = async () => {
      setLoading(true);
      try {
        const { categoryQuery, query } = props;
        const { data } = await axios.get(`${baseURL}/category`, {
          params: {
            category: categoryQuery,
            q: query,
          },
          withCredentials: true,
        });
        setNewContent(data?.articles);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };

  useEffect(() => {
    getNewsbyCategory();
  }, [props.categoryQuery, props.query]);

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
              <span className={styles.date}>{date} &nbsp; | &nbsp; {content.author}</span>
              <a href={content.url} target='_blank'>
                <h2 className={styles.title}>{content.title}</h2>
              </a>
              <p className={styles.description}>{content.description}</p>
            </div>
          );
        })
      )}
    </section>
  );
};

export default typicalPage;
