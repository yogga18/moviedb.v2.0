import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import AppWeather from '../../Components/AppWeather';
import Navigation from '../../Components/Navigation/Navigation';
import Profile from '../../Components/Profile';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <Row className='mt-3'>
          <Col
            md={6}
            onClick={goToProfile}
            style={{
              cursor: 'pointer',
            }}
          >
            <Profile />
          </Col>
          <Col md={6} className='bg-warning'>
            <AppWeather />
          </Col>
        </Row>
        <h1>Dashboard</h1>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
