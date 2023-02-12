import React from 'react';
import styles from '../css/Footer.module.css';
import logo from '../assets/logo/news-logo-white.svg';

const Footer = () => {
  const quickLinks = [
    { id: 1, href: '/', label: 'Home' },
    { id: 2, href: '/', label: 'Business' },
    { id: 3, href: '/', label: 'Health' },
    { id: 4, href: '/', label: 'Entertainment' },
    { id: 5, href: '/', label: 'Sports' },
  ];

  const resources = [
    { id: 1, href: '/about', label: 'About' },
    { id: 2, href: 'https://newsapi.org/', label: 'News API' },
    { id: 3, href: 'https://github.com/lcslicp/news-ts', label: 'GitHub' },
    {
      id: 4,
      href: 'mailto: lcslicp.dev@gmail.com',
      label: 'Contact Developer',
    },
  ];

  const year = new Date().getFullYear();
  return (
    <footer>
      <section className={styles.container}>
        <div className={styles.section}>
          <img src={logo} alt='Nownews logo' className={styles.logo} />
        </div>
        <div className={styles.section}>
          <h6 className={styles.title}>Quick Links</h6>
          {quickLinks.map((link) => (
            <a href={link.href} key={link.id} className={styles.links}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.section}>
          <h6 className={styles.title}>Resources</h6>
          {resources.map((link) => (
            <a
              href={link.href}
              key={link.id}
              className={styles.links}
              target='_blank'
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
      <div className={styles.footer}>
        <p className={styles.copyright}>
        &#169; {year} &#183; Website Designed &amp; Developed by <a href='https://github.com/lcslicp' target='_blank'>lcslicp </a> &#183; Content provided by <a href='https://newsapi.org/' target='_blank'>News API</a> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
