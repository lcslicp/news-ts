import illustration from '../../assets/illustrations/notfound-404.svg';
import styles from '../../css/EmptyUI.module.css';

const NotFound = () => {
  return (
    <section className={styles.container}>
      <img
        src={illustration}
        alt='Error connecting to API'
        className={styles.illustration}
      />
      <p className={styles.title}>404 Not Found</p>
      <p className={styles.text}>
        Oops, it looks like we couldn't find what you're looking for. Maybe try
        checking the URL or searching for something else?
        <br />
        <a href='/'>Go back to Homepage.</a>{' '}
      </p>
    </section>
  );
};

export default NotFound;
