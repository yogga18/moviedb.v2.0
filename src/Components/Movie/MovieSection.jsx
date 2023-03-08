import React, { Fragment, useState, useEffect } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  Container,
  Spinner,
  Badge,
  CardTitle,
  Button,
  Modal,
} from 'reactstrap';
import './Movie.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTrailer } from '../../store/actions';

const MovieSection = ({ data, titleWrapepr, bg_bandage }) => {
  const dispatch = useDispatch();
  let movies = data.data.results || [];

  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [urlVide, setUrlVideo] = useState('');

  const { getTrailers } = useSelector((state) => state.MovieReducer);

  const toggleVideo = (id) => {
    dispatch(getTrailer(id));

    setIsOpenVideo(!isOpenVideo);
  };

  useEffect(() => {
    if (getTrailers.data?.results?.length) {
      const link = `https://www.youtube.com/embed/${getTrailers.data.results[0].key}`;
      setUrlVideo(link);
    }
  }, [getTrailers]);

  return (
    <Container fluid className='movie-section-wrapper'>
      {data.isLoading ? (
        <Spinner
          color='danger'
          className='d-flex justify-content-center align-items-center'
        />
      ) : movies.length == 0 && data.isLoading == false ? (
        <h4 className='text-center'>Comming Soon</h4>
      ) : (
        <Fragment>
          <Badge color={bg_bandage} className='mt-5 mb-2 p-2'>
            {titleWrapepr}
          </Badge>
          <div className='scroll-movie-wrapper'>
            {movies.map((movie) => {
              return (
                <div className='item' key={movie.id}>
                  <Card inverse>
                    <CardImgOverlay className='card-img-overlay'>
                      <CardTitle tag='h5'>{movie.title}</CardTitle>
                      <div className='d-flex justify-content-center gap-1 align-items-end mt-5'>
                        <Button size='sm' color='primary' title='Detail Movie'>
                          <Link to={`/detail-movie/${movie.id}`}>
                            <b className='text-white'>Detail</b>
                          </Link>
                        </Button>
                        <Button
                          size='sm'
                          color='primary'
                          onClick={() => {
                            toggleVideo(movie.id);
                          }}
                        >
                          <b className='text-white' title='Watch Trailer'>
                            Trailer
                          </b>
                        </Button>
                      </div>
                    </CardImgOverlay>
                    <CardImg
                      width='100%'
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                  </Card>
                </div>
              );
            })}
          </div>
        </Fragment>
      )}
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
    </Container>
  );
};

MovieSection.propTypes = {
  data: PropTypes.any,
  titleWrapepr: PropTypes.string,
  bg_bandage: PropTypes.string,
};

export default MovieSection;
