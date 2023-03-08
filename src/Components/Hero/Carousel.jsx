import React, { Fragment } from 'react';
import { Card, CardImg, Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { BASE_IMAGE_URL } from '../../config/api/api_helper';
import './Hero.scss';

const Carousel = ({ data }) => {
  let movies = data.data.results || [];
  let pickFirstMovie = movies[0];
  let pickSecondMovie = movies[1];

  return (
    <Fragment>
      <Container fluid className='pt-5 mb-5 hero-wrapper'>
        <Row className='mt-3 p-0 m-0'>
          <Col md={6} className='hero-side-a'>
            {pickFirstMovie === undefined ? (
              <p>Loading.....</p>
            ) : (
              <Card className='card-hero-wrapper'>
                <h1 className='card-hero-overlay-wrapper'>Relese Now</h1>
                <CardImg
                  src={`${BASE_IMAGE_URL}${pickFirstMovie.backdrop_path}`}
                  width='100%'
                  alt='Card image cap'
                  height='100%'
                  className='hero-img'
                />
              </Card>
            )}
          </Col>
          <Col md={6} className='hero-side-b'>
            {pickSecondMovie === undefined ? (
              <p>Loading.....</p>
            ) : (
              <Card className='card-hero-wrapper'>
                <h1 className='card-hero-overlay-wrapper'>Trending Now</h1>
                <CardImg
                  src={`${BASE_IMAGE_URL}${pickSecondMovie.backdrop_path}`}
                  width='100%'
                  alt='Card image cap'
                  height='100%'
                  className='hero-img'
                />
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

Carousel.propTypes = {
  data: PropTypes.any,
};

export default Carousel;
