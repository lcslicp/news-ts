
import { Link } from 'react-router-dom';
import styles from '../../css/Header.module.css';
import logo from '../assets/logo/news-logo-black.svg';

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.fullwidth}`}>
      <div className={styles.upperHeader}>
        <Link to={'/'}className={styles.logo}><img src={logo} alt='news-logo'  /></Link> 
        <div className={styles.search}>
          <input
            type='search'
            className={styles.search}
            placeholder='Search News'
          />
          <button className={styles.btn}>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
