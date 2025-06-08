import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/common/Header.module.css';
import { queryProps } from '../../App';
// import SearchInput from '../feature/SearchInput';

const Header = ({
}) => {
  return (
    <header className={`${styles.header} ${styles.fullwidth}`}>
      <div className={`${styles.upperHeader} ${styles.even}`}>
        <span className={`${styles.headerLeft}`}>Where the ink may be digital, but the integrity remains printed in every word.</span>
        <Link to={'/home'} className={styles.logo}>
          <h1>The Modern Newspaper</h1>
        </Link>
        <span className={`${styles.headerRight}`}>Designed and developed by <a href="www.github.com/lcslicp">lcslicp</a>, for minds that question.</span>
      </div>
    </header>
  );
};

export default Header;
