import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../../Components/Navigation/Navigation';

const Dashboard = () => {
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
