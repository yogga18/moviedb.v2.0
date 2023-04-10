import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import SideMenus from '../../Components/SideMenus';
import Navigation from '../../Components/Navigation/Navigation';
import Profile from '../../Components/Profile';
import SearchMovie from '../../Components/Movie/SearchMovie';
import { searchMovie } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../Components/Movie/MovieCard';
import utilities from '../../helpers/utilities';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const encryptedUser = localStorage.getItem('user');
  const bytes = utilities.decLocalStrg(encryptedUser);

  const [hide, setHide] = useState(false);

  const { searchMovies } = useSelector((state) => state.MovieReducer);

  const goToProfile = () => {
    navigate('/profile');
  };

  const displayHide = ({ hide, query }) => {
    setHide(hide);
    dispatch(searchMovie(query));
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <Row className='mt-3'>
          <Col
            md={6}
            xs={6}
            sm={6}
            onClick={goToProfile}
            style={{
              cursor: 'pointer',
            }}
          >
            <Profile />
          </Col>
          <Col md={6} xs={6} sm={6}>
            <SideMenus />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col md={12} xl={12} xs={12} sm={12}>
            <SearchMovie displayHide={displayHide} />
          </Col>
        </Row>
        <Row className='mx-3'>
          {hide && <MovieCard movies={searchMovies} />}
        </Row>
      </Container>
      <h1 className='text-center'>User Dashboard</h1>
    </Fragment>
  );
};

export default Dashboard;
