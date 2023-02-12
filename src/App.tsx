import Header from './components/Header';
import Footer from './components/Footer';
import TabNavigation from './components/TabNavigation';
import Home from './Pages/Home';
import TypicalPage from './Pages/typicalPage';



function App() {
  const links = [
    { id: 1, label: 'Home', content: <Home />},
    { id: 2, label: 'Business', content: <TypicalPage /> },
    { id: 3, label: 'Health', content: <TypicalPage />  },
    { id: 4, label: 'Entertainment', content: <TypicalPage />  },
    { id: 5, label: 'Sports', content: <TypicalPage />  },
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
