import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../../Components/Navigation/Navigation';

const Dashboard = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    let storedUser = localStorage.getItem('user');
    let user = JSON.parse(storedUser);
    setUserData(user || {});
  }, []);

  console.log('userData', userData);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <h1>Dashboard</h1>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
