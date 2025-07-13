import { Link } from 'react-router-dom';
import styles from '../../css/common/Header.module.css';


const Header = ({
}) => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.upperHeader}`}>
        <span className={`${styles.headerLeft}`}>Where the ink may be digital, but the integrity remains printed.</span>
        <Link to={'/home'} className={styles.h1Container}>
          <h1>The Modern Newspaper</h1>
        </Link>
        <span className={`${styles.headerRight}`}>News articles sourced from <a href="https://newsapi.org/" target="_blank">NewsAPI</a>.</span>
      </div>
    </header>
  );
};

export default Header;
