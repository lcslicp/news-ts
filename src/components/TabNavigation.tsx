import React, { useState } from 'react';
import styles from '../css/TabNavigation.module.css';
import { navProps } from './Header';

const Navbar: React.FC<navProps> = ({ links }) => {
  const [selectedTab, setSelectedTab] = useState(links[0].id);

  const tabList = links.map((tab) => (
    <li
      key={tab.id}
      className={`${styles.tabs} ${
        selectedTab === tab.id ? styles.activeTab : styles.inactiveTab
      }`}
      onClick={() => setSelectedTab(tab.id)}
    >
      {tab.label}
    </li>
  ));

  const tabContent = links.map((content) => (
    <div
      key={content.id}
      style={selectedTab === content.id ? {} : { display: 'none' }}
    >
      {content.content}
    </div>
  ));

  return (
    <section className={styles.section}>
      <ul className={styles.nav}>{tabList}</ul>
      <div>{tabContent}</div>
    </section>
  );
};

export default Navbar;
