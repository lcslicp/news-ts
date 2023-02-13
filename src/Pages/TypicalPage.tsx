import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import styles from '../css/TypicalPage.module.css';

const typicalPage = (props: { categoryQuery: string }) => {
  const [newContent, setNewContent] = useState<JSX.Element[]>([]);

  const getNewsbyCategory = async () => {
    const { categoryQuery } = props;

    try {
      const apiKey = localStorage.getItem('apiKey');
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
      console.log(newContent);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsbyCategory();
  }, [props.categoryQuery]);

  return (
    <section className={styles.container}>
    </section>
  );
};

export default typicalPage;
