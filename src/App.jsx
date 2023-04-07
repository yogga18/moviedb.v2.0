import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailMovies from './Components/Movie/DetailMovies';
import DetailProfile from './Components/Profile/DetailProfile';
import Forum from './Components/SideMenus/Forum';
import MovieChart from './Components/SideMenus/MovieChart';
import NotFound from './pages/404';
import AboutPage from './pages/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard';
import Genres from './pages/Genres';
import GendreDetail from './pages/Genres/GendreDetail';
import HomePage from './pages/Home';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  let isRegis = localStorage.getItem('isRegis');
  let logIn = localStorage.getItem('isLogin');

  useEffect(() => {
    if (isRegis && logIn) {
      const auth = getAuth();

      onAuthStateChanged(auth, (result) => {
        if (result) {
          setIsLogin(true);
          localStorage.setItem('isLogin', true);
        } else {
          setIsLogin(false);
          localStorage.setItem('isLogin', false);
        }
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/genres/:id' element={<GendreDetail />} />
        <Route path='/detail-movie/:id' element={<DetailMovies />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* Protected Routes */}
        {isLogin ? (
          <>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<DetailProfile />} />
            <Route path='/movie-charts' element={<MovieChart />} />
            <Route path='/forum' element={<Forum />} />
          </>
        ) : null}
        {/* 404 Not Found Route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
