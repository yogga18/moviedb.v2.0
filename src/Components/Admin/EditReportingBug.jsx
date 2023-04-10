import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../Navigation/Navigation';

const EditReportingBug = () => {
  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <p className='text-center mt-5'>Get Reporting Bug By Id</p>
      </Container>
    </Fragment>
  );
};

export default EditReportingBug;
