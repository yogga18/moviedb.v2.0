import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailMovies from './Components/Movie/DetailMovies';
import NotFound from './pages/404';
import AboutPage from './pages/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard';
import Genres from './pages/Genres';
import GendreDetail from './pages/Genres/GendreDetail';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/genres/:id' element={<GendreDetail />} />
        <Route path='/detail-movie/:id' element={<DetailMovies />} />
        {/* Protected Routes */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
