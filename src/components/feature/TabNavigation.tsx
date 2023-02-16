import { useState } from 'react';
import styles from '../../css/feature/TabNavigation.module.css';

interface navLinks {
  id: number;
  label: string;
  content: JSX.Element | null;
}

export interface navProps {
  links: navLinks[];
}

const TabNavigation: React.FC<navProps> = ({ links }) => {
  const [selectedTab, setSelectedTab] = useState(links[0].id);

  const tabList = links.map((tab) => (
    <li
      key={tab.id}
      className={`${styles.tabs} ${
        selectedTab === tab.id ? styles.activeTab : styles.inactiveTab
      }`}
      onClick={() => {
        setSelectedTab(tab.id);
      }}
    >
      {tab.label}
    </li>
  ));

  const selectedTabContent = links.find(
    (tab) => tab.id === selectedTab
  )?.content;

  return (
    <section className={styles.section}>
      <ul className={styles.nav}>{tabList}</ul>
      <div>{selectedTabContent}</div>
    </section>
  );
};

export default TabNavigation;
