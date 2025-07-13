import styles from '../../css/loading screens/LoadingSpinner.module.css'

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
