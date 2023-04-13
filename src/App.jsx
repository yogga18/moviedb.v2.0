import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import EditReportingBug from './Components/Admin/EditReportingBug';
import DetailMovies from './Components/Movie/DetailMovies';
import DetailProfile from './Components/Profile/DetailProfile';
import BugReport from './pages/User/ReportingBug/BugReport';
import Forum from './pages/User/Forum/Forum';
import Message from './pages/User/TrackBug/Message';
import MovieChart from './pages/User/FavMovies/MovieChart';
import utilities from './helpers/utilities';
import NotFound from './pages/404';
import AboutPage from './pages/About';
import ManageUsers from './pages/Admin/ManageUsers';
import ReportingBug from './pages/Admin/ReportingBug';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard';
import DashboardAdmin from './pages/Dashboard/DashboardAdmin';
import Genres from './pages/Genres';
import GendreDetail from './pages/Genres/GendreDetail';
import HomePage from './pages/Home';
import DetailMessage from './pages/User/TrackBug/DetailMessage';
import UserDetail from './Components/Admin/UserDetail';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      setIsLoading(false); // set loading state to false when authentication finishes
      if (result) {
        setIsLogin(true);
        const encryptedUser = localStorage.getItem('user');
        const user = utilities.decLocalStrg(encryptedUser);
        setUser(user);
        setUserRole(user?.role);
      } else {
        setIsLogin(false);
      }
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <Spinner color='danger' className='m-auto' />; // display loading spinner or message
  }

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

        {isLogin && userRole === 'admin' ? (
          <>
            <Route path='/dashboard-admin' element={<DashboardAdmin />} />
            <Route path='/reporting-bug' element={<ReportingBug />} />
            <Route path='/reporting-bug/:id' element={<EditReportingBug />} />
            <Route path='/manage-users' element={<ManageUsers />} />
            <Route path='/manage-users/:id' element={<UserDetail />} />
          </>
        ) : isLogin && userRole === 'user' ? (
          <>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<DetailProfile />} />
            <Route path='/movie-charts' element={<MovieChart />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/bug-report' element={<BugReport />} />
            <Route path='/messages' element={<Message />} />
            <Route path='/messages/:id' element={<DetailMessage />} />
          </>
        ) : null}

        {/* 404 Not Found Route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
