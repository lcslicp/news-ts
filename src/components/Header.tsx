import React from 'react';
import styles from '../css/Header.module.css';
import logo from '../assets/logo/news-logo-full-color.svg';

const Header = () => {
  const links = [
    { id: 1, href: '/', label: 'Home' },
    { id: 2, href: '/business', label: 'Business' },
    { id: 3, href: '/health', label: 'Health' },
    { id: 4, href: '/entertainment', label: 'Entertainment' },
    { id: 5, href: '/sports', label: 'Sports' },
  ];

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
                <a href={link.href} className={styles.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
