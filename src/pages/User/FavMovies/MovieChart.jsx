import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Navigation from '../../../Components/Navigation/Navigation';

const MovieChart = () => {
  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <h1>MovieChart</h1>
        <p>Movie Chart using Firebase Firestore</p>
      </Container>
    </Fragment>
  );
};

export default MovieChart;
