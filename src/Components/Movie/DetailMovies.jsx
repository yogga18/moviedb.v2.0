import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Badge, Col, Container, Modal, Row, Spinner, Button } from 'reactstrap';
import { BASE_IMAGE_URL } from '../../config/api/api_helper';
import utilities from '../../config/function/utilities';
import { getMoviesById, getTrailer } from '../../store/actions';
import CarouselComp from '../Carousel';
import Navigation from '../Navigation/Navigation';
import './Movie.scss';

const DetailMovies = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [urlVide, setUrlVideo] = useState('');

  const { getMovieById, getTrailers } = useSelector(
    (state) => state.MovieReducer
  );

  // function random number
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const toggleVideo = (id) => {
    dispatch(getTrailer(id));

    setIsOpenVideo(!isOpenVideo);
  };

  const genres = (getMovieById.data.genres || []).map((item) => ({
    id: item.id,
    name: item.name,
  }));

  let imgCollection = getMovieById.data.belongs_to_collection;
  let photoCollections = [];

  photoCollections.push(
    {
      src: `${BASE_IMAGE_URL}${getMovieById.data.backdrop_path}`,
      key: random(1, 100),
    },
    {
      src: `${BASE_IMAGE_URL}${getMovieById.data.poster_path}`,
      key: random(1, 100),
    },
    {
      src: `${BASE_IMAGE_URL}${imgCollection?.poster_path}`,
      key: random(1, 100),
    },
    {
      src: `${BASE_IMAGE_URL}${imgCollection?.poster_path}`,
      key: random(1, 100),
    }
  );

  useEffect(() => {
    dispatch(getMoviesById(id));

    if (getTrailers.data?.results?.length) {
      const link = `https://www.youtube.com/embed/${getTrailers.data.results[0].key}`;
      setUrlVideo(link);
    }
  }, [getTrailers]);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <div className='mt-3'>
          {getMovieById.isLoading && <Spinner color='danger' />}

          {getMovieById.isLoading == false && (
            <Fragment>
              <Row className='detail-movie-wrapper'>
                <Col md={6}>
                  <CarouselComp photoCollections={photoCollections} />
                </Col>
                <Col md={6}>
                  <h4 className='text-center'>
                    <b>{getMovieById.data.title}</b>
                  </h4>
                  <h4 className='text-center'>
                    <i>" {getMovieById.data.tagline || '-'} "</i>
                  </h4>
                  <p>{getMovieById.data.overview}</p>
                  {genres?.map((item) => {
                    return (
                      <Link to={`/genres/${item.id}`} key={item.id}>
                        <Badge
                          className={
                            item.name === 'Animation'
                              ? 'bg-warning'
                              : item.name === 'Adventure'
                              ? 'bg-success'
                              : item.name === 'Mystery'
                              ? 'bg-warning'
                              : item.name === 'Horror'
                              ? 'bg-danger'
                              : item.name === 'Thriller'
                              ? 'bg-danger'
                              : item.name === 'Comedy'
                              ? 'bg-success'
                              : item.name === 'Family'
                              ? 'bg-success'
                              : item.name === 'Crime'
                              ? 'bg-warning'
                              : item.name === 'Action'
                              ? 'bg-warning'
                              : item.name === 'Drama'
                              ? 'bg-info'
                              : item.name === 'Music'
                              ? 'bg-info'
                              : item.name === 'Romance'
                              ? 'bg-warning'
                              : ''
                          }
                        >
                          <b>{item.name}</b>
                        </Badge>
                      </Link>
                    );
                  })}
                  <div className='mt-2'>
                    <Button
                      size='sm'
                      color='danger'
                      onClick={() => {
                        toggleVideo(getMovieById.data.id);
                      }}
                    >
                      <b className='text-white' title='Watch Trailer'>
                        Trailer 🎬
                      </b>
                    </Button>
                  </div>
                  <div className='d-flex gap-5 mt-2'>
                    <b>Rating</b>
                    <Badge color='dark'>
                      {utilities.toCurrency(getMovieById.data.vote_average)} ⭐
                    </Badge>
                  </div>

                  <div className='d-flex gap-1 my-2'>
                    <b>Release Date</b>
                    <Badge color='dark'>
                      {utilities.convertDate(
                        getMovieById.data.release_date,
                        'DD MMMM YYYY'
                      )}{' '}
                      📅
                    </Badge>
                  </div>
                  <div className='d-flex gap-5'>
                    <b>Budget</b>
                    <Badge color='dark'>
                      {utilities.unmaskMoney(getMovieById.data.budget)} 💲
                    </Badge>
                  </div>
                  <div className='d-flex gap-5 my-2'>
                    <b>Revenue</b>
                    <Badge color='dark'>
                      {utilities.unmaskMoney(getMovieById.data.revenue)} 💰
                    </Badge>
                  </div>
                </Col>
              </Row>
            </Fragment>
          )}
        </div>
      </Container>
      <Modal
        size='xl'
        isOpen={isOpenVideo}
        toggle={() => toggleVideo()}
        backdrop={true}
        keyboard={true}
        centered={true}
      >
        <iframe
          width={'100%'}
          height={500}
          src={urlVide}
          title='Trailer Movie'
          frameBorder={2}
          style={{ borderRadius: 6 }}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </Modal>
    </Fragment>
  );
};

export default DetailMovies;
