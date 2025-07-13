import styles from '../../css/common/Footer.module.css';
import logo from '../../assets/logo/news-logo-white.svg';

const Footer = () => {
  const links = [
    { id: 1, href: '/about', label: 'About' },
    { id: 2, href: '/about#assets', label: 'Site Assets' },
    { id: 3, href: '/about#sitelimitations', label: 'Site Limitations' },
    { id: 4, href: 'https://newsapi.org/', label: 'News API' },
    { id: 5, href: 'https://github.com/lcslicp/news-ts', label: 'GitHub' },
    {
      id: 6,
      href: 'mailto: lcslicp.dev@gmail.com',
      label: 'Give Feedback',
    },
  ];

  const year = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <div className={styles.footerLinks}>
      {links.map((link) => (
            <a href={link.href} key={link.id}>
              {link.label}
            </a>
          ))}
      </div>
          
      <div className={styles.copyright}>
        <p>
        &#169; {year} &#183; Website Designed &amp; Developed by <a href='https://github.com/lcslicp' target='_blank'>lcslicp </a> &#183; Content provided by <a href='https://newsapi.org/' target='_blank'>News API</a> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
