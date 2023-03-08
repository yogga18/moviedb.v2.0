import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../../Components/Navigation/Navigation';

const AboutPage = () => {
  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <h5 className='text-center mt-5'>
          <b>About</b>
        </h5>
      </Container>
    </Fragment>
  );
};

export default AboutPage;
