import styles from '../../css/feature/TabNavigation.module.css';
import { useState } from 'react';
import { navLinks } from '../../App';

interface TabNavigationProps {
  links: navLinks[];
  query: string;
  selectedTab: number | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  links,
  selectedTab,
  setSelectedTab,
}) => {
  const [queryLength, setQueryLength] = useState<number>(0);
  const tabList = links.map((tab) => (
    <li
      key={tab.id}
      className={`${styles.tabs} ${
        selectedTab === tab.id && selectedTab !== 6
          ? styles.activeTab
          : styles.inactiveTab
      }`}
      onClick={() => {
        setQueryLength(0);
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
