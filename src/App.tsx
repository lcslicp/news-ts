import { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import TabNavigation from './components/feature/TabNavigation';
import Home from './pages/Home';
import TypicalPage from './pages/TypicalPage';

export interface queryProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedTab: number | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

export interface navLinks {
  id: number;
  label: string | null;
  content: JSX.Element | null;
}

function App(props: navLinks[]) {
  const [query, setQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState(1);

  const links = [
    { id: 1, label: 'Home', content: <Home /> },
    {
      id: 2,
      label: 'Business',
      content: (
        <TypicalPage key='business' categoryQuery='business' query={null} />
      ),
    },
    {
      id: 3,
      label: 'Health',
      content: <TypicalPage key='health' categoryQuery='health' query={null} />,
    },
    {
      id: 4,
      label: 'Entertainment',
      content: (
        <TypicalPage
          key='entertainment'
          categoryQuery='entertainment'
          query={null}
        />
      ),
    },
    {
      id: 5,
      label: 'Sports',
      content: <TypicalPage key='sports' categoryQuery='sports' query={null} />,
    },
    {
      id: 6,
      label: null,
      content: <TypicalPage key={null} categoryQuery={null} query={query} />,
    },
  ];

  return (
    <main>
      <Header
        query={query || ''}
        setQuery={setQuery}
        selectedTab={selectedTab || null}
        setSelectedTab={setSelectedTab}
      />
      <TabNavigation
        links={links}
        query={query}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Footer />
    </main>
  );
}

export default App;
