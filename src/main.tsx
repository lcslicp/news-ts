import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import './css/globals.css';
import NotFound from './components/empty UI state/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
