import React from 'react';
import { navProps } from '../App';
import styles from '../css/Header.module.css';
import logo from '../assets/logo/news-logo-white.svg';

const Header: React.FC<navProps> = ({ links }) => {
  return (
    <header className={`${styles.header} ${styles.fullwidth}`}>
      <nav
        className={`${styles.container} ${styles.even} ${styles.webwidth} ${styles.fullwidth}`}
      >
        <img src={logo} alt='news-logo' className={styles.logo} />
        <div
          className={`${styles.container} ${styles.nav} ${styles.fullwidth}`}
        >
          <ul
            className={`${styles.container} ${styles.navlinks} ${styles.nav} ${styles.fullwidth}`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
