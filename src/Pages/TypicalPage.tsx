import { useEffect, useMemo, useState } from 'react';
import axios from '../api/axios';
import styles from '../css/TypicalPage.module.css';
import { Article } from './Home';

import SkeletonLoading from '../components/loading screens/SkeletonLoading';

const typicalPage = (props: { categoryQuery: string }) => {
  const [newContent, setNewContent] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const getNewsbyCategory = useMemo(() => {
    async function fetchNewsbyCategory() {
      try {
        const apiKey = localStorage.getItem('apiKey');
        const { categoryQuery } = props;
        const { data } = await axios.get('/category', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
          },
          params: {
            category: categoryQuery,
          },
          withCredentials: true,
        });
        setNewContent(data?.articles);
      } catch (error) {
        console.log(error);
      }
    }
    return fetchNewsbyCategory;
  }, []);

  useEffect(() => {
    getNewsbyCategory();
  }, [props.categoryQuery]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section className={styles.container}>
      {loading ? (
        <SkeletonLoading />
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
