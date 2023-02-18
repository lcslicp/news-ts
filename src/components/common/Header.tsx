import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/common/Header.module.css';
import { queryProps } from '../../App';
import logo from '../../assets/logo/news-logo-black.svg';
import SearchInput from '../feature/SearchInput';

const Header: React.FC<queryProps> = ({
  query,
  setQuery,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <header className={`${styles.header} ${styles.fullwidth}`}>
      <div className={styles.upperHeader}>
        <Link to={'/home'} className={styles.logo}>
          <img src={logo} alt='news-logo' />
        </Link>
        <SearchInput
          query={query || ''}
          setQuery={setQuery}
          selectedTab={selectedTab || null}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </header>
  );
};

export default Header;
