import React, { Fragment, useEffect } from 'react';
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
import Navigation from '../../Components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesByGenre } from '../../store/actions';
import { Link, useParams } from 'react-router-dom';
import { BASE_IMAGE_URL } from '../../config/api/api_helper';
import './Genres.scss';

const GendreDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { moviesByGenre } = useSelector((state) => state.MovieReducer);

  useEffect(() => {
    dispatch(getMoviesByGenre(id));
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='genres-detail-wrapper pt-5'>
        <Row className='mt-3'>
          {moviesByGenre.isLoading && <Spinner color='danger' />}
          {moviesByGenre.data.length > 0 &&
            moviesByGenre.data.map((item) => {
              return (
                <Col xs={6} md={4} lg={3} key={item.id} className='mb-3'>
                  <Link to={`/detail-movie/${item.id}`}>
                    <Card className='card-wrapper'>
                      <CardImgOverlay className='card-overlay-wrapper'>
                        <CardTitle tag='h5' className='mb-5 text-white'>
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
        </Row>
      </Container>
    </Fragment>
  );
};

export default GendreDetail;
