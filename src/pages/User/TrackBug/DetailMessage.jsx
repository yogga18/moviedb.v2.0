import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../../../Components/Navigation/Navigation';

const DetailMessage = () => {
  return (
    <Fragment>
      <Navigation />
      <Container className='pt-5'>
        <h1 className='text-center'>DetailMessage</h1>
      </Container>
    </Fragment>
  );
};

export default DetailMessage;
