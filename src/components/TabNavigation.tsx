import { useState } from 'react';
import styles from '../css/TabNavigation.module.css';
import TypicalPage from '../Pages/TypicalPage';

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
  const selectedTabData = links.find(tab => tab.id === selectedTab);

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

  return (
    <section className={styles.section}>
      <ul className={styles.nav}>{tabList}</ul>
      <div>{selectedTabData && (
        <TypicalPage key={selectedTabData.label} categoryQuery={selectedTabData.label.toLowerCase()} />
      )}

      </div>
    </section>
  );
};

export default TabNavigation;
