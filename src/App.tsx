import Header from './components/common/Header';
import Footer from './components/common/Footer';
import TabNavigation from './components/feature/TabNavigation';

import Home from './Pages/Home';
import TypicalPage from './Pages/TypicalPage';

function App() {
  const links = [
    { id: 1, label: 'Home', content: <Home /> },
    {
      id: 2,
      label: 'Business',
      content: <TypicalPage key='business' categoryQuery='business' />,
    },
    {
      id: 3,
      label: 'Health',
      content: <TypicalPage key='health'
      categoryQuery='health' />,
    },
    {
      id: 4,
      label: 'Entertainment',
      content: (
        <TypicalPage key='entertainment' categoryQuery='entertainment' />
      ),
    },
    {
      id: 5,
      label: 'Sports',
      content: <TypicalPage key='sports'
      categoryQuery='sports' />,
    },
  ];

  return (
    <main>
      <Header />
      <TabNavigation links={links} />
      <Footer />
    </main>
  );
}

export default App;
