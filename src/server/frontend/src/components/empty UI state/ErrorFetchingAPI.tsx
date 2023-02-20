import illustration from '../../assets/illustrations/disconnect-api.svg';
import styles from '../../css/EmptyUI.module.css';

const ErrorFetchingAPI = () => {
  return (
    <section className={styles.container}>
      <img
        src={illustration}
        alt='Error connecting to API'
        className={styles.illustration}
      />
      <p className={styles.title}>Error Fetching Data</p>
      <p className={styles.text}>
        Uh-oh! Looks like we're having trouble getting the data we need right
        now due to this site's limitations.{' '}
        <a href='/about#sitelimitations'>
          <br />
          Learn More.
        </a>{' '}
      </p>
    </section>
  );
};

export default ErrorFetchingAPI;
