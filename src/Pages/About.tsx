import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import styles from '../css/pages/About.module.css';

const About = () => {
  return (
    <main>
      <section className={styles.container}>
        <Link to='/' className={styles.nav}>
          &#171; Back to Homepage
        </Link>
        <h4 className={styles.title}>About</h4>
        <p className={styles.description}>
          This website displays information sourced from{' '}
          <a href='https://newsapi.org/' target='_blank'>
            News API
          </a>
          . The content displayed on this site is the property of News API and
          is used with permission. This site does not claim ownership of the
          content and makes no representations or warranties regarding its
          accuracy or completeness. The design and development of this website
          was carried out by{' '}
          <a href='https://github.com/lcslicp' target='_blank'>
            lcslicp
          </a>{' '}
          as a personal project.
          <br />
          <br />
          <em>NowNews</em> is not a real media entity or business; it is solely
          created for the purpose of this personal project.
        </p>
        <br />
        <h4 className={styles.title} id='sitelimitations'>
          Site Limitations
        </h4>
        <p className={styles.description}>
          Please note that the information displayed on this website is subject
          to the limitations set forth by the API provider. Specifically, the
          API provider only allows up to{' '}
          <em>100 API calls per 24-hour period,</em> and once this limit is
          reached, the website will no longer be able to fetch data from the
          API. By using this site, you agree to the terms and conditions set
          forth by News API.
          <br />
          <br />
          If you are interested in testing out the user interface of the website
          without the limitations set upon by the API used, you may visit the
          demo site that uses placeholder content.
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default About;
