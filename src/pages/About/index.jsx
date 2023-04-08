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
        <p className='text-center mt-5'>User Testing</p>
        <p className='text-center'>
          Email : <b>candra@gmail.com</b>
        </p>
        <p className='text-center'>
          Password :<b> Candra##12</b>
        </p>
      </Container>
    </Fragment>
  );
};

export default AboutPage;
