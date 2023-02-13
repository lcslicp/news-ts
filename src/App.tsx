import Header from './components/Header';
import Footer from './components/Footer';
import TabNavigation from './components/TabNavigation';

import Home from './Pages/Home';
import TypicalPage from './Pages/TypicalPage';


function App() {

  const links = [
    { id: 1, label: 'Home', content: <Home /> },
    {
      id: 2,
      label: 'Business',
      content: <TypicalPage categoryQuery='business' />,
    },
    {
      id: 3,
      label: 'Health',
      content: <TypicalPage categoryQuery='health' />,
    },
    {
      id: 4,
      label: 'Entertainment',
      content: (
        <TypicalPage categoryQuery='entertainment' />
      ),
    },
    {
      id: 5,
      label: 'Sports',
      content: <TypicalPage categoryQuery='sports' />,
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
