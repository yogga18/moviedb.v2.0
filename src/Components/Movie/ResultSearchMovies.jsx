import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { BASE_IMAGE_URL } from '../../config/api/api_helper';
import './Movie.scss';

const ResultSearchMovies = ({ data }) => {
  let { isLoading } = data;

  return (
    <Fragment>
      <Container fluid className='pt-5'>
        <Row className='mt-3'>
          {isLoading && <Spinner color='danger' />}
          {isLoading === false &&
            data.data.length > 0 &&
            data.data.map((item) => {
              return (
                <Col xs={6} md={4} lg={3} key={item.id} className='mb-3'>
                  <Link to={`/detail-movie/${item.id}`}>
                    <Card className='card-wrapper'>
                      <CardImgOverlay className='card-overlay-wrapper'>
                        <CardTitle tag='h5' className='mb-3 text-white'>
                          {item.original_title}
                        </CardTitle>
                        <CardSubtitle className='text-light' tag='p'>
                          {item.overview.slice(0, 150)}...
                        </CardSubtitle>
                      </CardImgOverlay>
                      <CardImg
                        width='100%'
                        src={`${BASE_IMAGE_URL}${item.poster_path}`}
                        alt='Card image cap'
                        className='movie-image'
                      />
                    </Card>
                  </Link>
                </Col>
              );
            })}
          {isLoading === false && data.data.length === 0 && (
            <Col xs={12} className='text-center'>
              <img src='https://media.giphy.com/media/kc1qe57aesZgI/giphy.gif' />
              <h1 className='text-danger'>Movie Not Found</h1>
            </Col>
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

ResultSearchMovies.propTypes = {
  data: PropTypes.any,
};

export default ResultSearchMovies;
