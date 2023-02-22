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
          This is a demo site of{' '}
          <a href='https://nownews.lesliepn.info/' target='_blank'>
            Now News
          </a>{' '}. This site only displays placeholder content as it is only a fallback
          site for when Now News exceeds API call limits. The main purpose of
          this site is to showcase the UI of Now News. Some features may not
          function as intended as it only consumes a mock API.
          <br />
          <br />
          <em>NowNews</em> is not a real media entity or business; it is solely
          created for the purpose of this personal project.
        </p>
        <br />
        <h4 className={styles.title} id='assets'>
          Site Assets
        </h4>
        <p className={styles.description}>
          This website's assets including the logo and favicon, were created by
          lcslicp. <br />
          Illustrations were sourced from{' '}
          <a href='https://www.opendoodles.com/about' target='_blank'>
            OpenDoodles
          </a>
          . Credits to the original illustrator for their contribution to this
          website's visual appeal.
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default About;
