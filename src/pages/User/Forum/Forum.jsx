import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../../../Components/Navigation/Navigation';

const Forum = () => {
  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <h1>Forum</h1>
        <p> Realtime Chat using Socket.io</p>
      </Container>
    </Fragment>
  );
};

export default Forum;
