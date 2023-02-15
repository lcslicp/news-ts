import React from 'react';
import styles from '../../css/LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ldsring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </section>
    
  );
};

export default LoadingSpinner;
