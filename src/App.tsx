import { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import TabNavigation from './components/feature/TabNavigation';
import Home from './Pages/Home';
import TypicalPage from './Pages/TypicalPage';

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

function App() {
  const [query, setQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState(1);

  const links = [
    { id: 1, label: 'Home', content: <Home /> },
    {
      id: 2,
      label: 'Business',
      content: (
        <TypicalPage key={`business-${query}`} categoryQuery='business' query={query} />
      ),
    },
    {
      id: 3,
      label: 'Health',
      content: <TypicalPage key={`health-${query}`} categoryQuery='health' query={query} />,
    },
    {
      id: 4,
      label: 'Entertainment',
      content: (
        <TypicalPage
          key={`entertainment-${query}`}
          categoryQuery='entertainment'
          query={query}
        />
      ),
    },
    {
      id: 5,
      label: 'Sports',
      content: <TypicalPage key={`sports-${query}`} categoryQuery='sports' query={query} />,
    },
    {
      id: 6,
      label: null,
      content: <TypicalPage key={`other-${query}`} categoryQuery={null} query={query} />,
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
