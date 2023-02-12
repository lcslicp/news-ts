import styles from '../css/Header.module.css';
import logo from '../assets/logo/news-logo-black.svg';

interface navLinks {
  id: number;
  label: string;
  content: JSX.Element;
}

export interface navProps {
  links: navLinks[];
}

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.fullwidth}`}>
      <div className={styles.upperHeader}>
        <img src={logo} alt='news-logo' className={styles.logo} />
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
