import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../Navigation/Navigation';

const Message = () => {
  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <h1 className='mt-5 text-center'>Message</h1>
      </Container>
    </Fragment>
  );
};

export default Message;
