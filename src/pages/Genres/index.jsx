import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Col,
  Container,
  Row,
  CardTitle,
  CardImgOverlay,
  CardImg,
  Badge,
  Spinner,
} from 'reactstrap';
import Navigation from '../../Components/Navigation/Navigation';
import './Genres.scss';
import { getGenres } from '../../store/actions';
import { Link } from 'react-router-dom';

const Genres = () => {
  const tempData = [
    {
      id: 28,
      name: 'Action',
      poster_path:
        'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    },
    {
      id: 12,
      name: 'Adventure',
      poster_path:
        'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    },
    {
      id: 16,
      name: 'Animation',
      poster_path:
        'https://image.tmdb.org/t/p/w500/23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg',
    },
    {
      id: 35,
      name: 'Comedy',
      poster_path:
        'https://image.tmdb.org/t/p/w500/mktwkMjmoR83eXNakk0M2nh1cty.jpg',
    },
    {
      id: 80,
      name: 'Crime',
      poster_path:
        'https://image.tmdb.org/t/p/w500/jrPKVQGjc3YZXm07OYMriIB47HM.jpg',
    },
    {
      id: 99,
      name: 'Documentary',
      poster_path:
        'https://image.tmdb.org/t/p/w500/9smEX8UP84yb2GisLwyAyQKvCWS.jpg',
    },
    {
      id: 18,
      name: 'Drama',
      poster_path:
        'https://image.tmdb.org/t/p/w500/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
    },
    {
      id: 10751,
      name: 'Family',
      poster_path:
        'https://image.tmdb.org/t/p/w500/9rJFKvYvSyQ3HoTl1gcU55FOzYi.jpg',
    },
    {
      id: 14,
      name: 'Fantasy',
      poster_path:
        'https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
    },
    {
      id: 36,
      name: 'History',
      poster_path:
        'https://image.tmdb.org/t/p/w500/eeUNWsdoiOijOZAMaWFDA5Pb1n8.jpg',
    },
    {
      id: 27,
      name: 'Horror',
      poster_path:
        'https://image.tmdb.org/t/p/w500/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg',
    },
    {
      id: 10402,
      name: 'Music',
      poster_path:
        'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    },
    {
      id: 9648,
      name: 'Mystery',
      poster_path:
        'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    },
    {
      id: 10749,
      name: 'Romance',
      poster_path:
        'https://image.tmdb.org/t/p/w500/f9mbM0YMLpYemcWx6o2WeiYQLDP.jpg',
    },
    {
      id: 878,
      name: 'Science Fiction',
      poster_path:
        'https://image.tmdb.org/t/p/w500/4uWZ8cdrXMLiyLNgdmqQCIM6z40.jpg',
    },
    {
      id: 10770,
      name: 'TV Movie',
      poster_path:
        'https://image.tmdb.org/t/p/w500/b3HXxFnhy0pamuDY9rqJ4mk7L1t.jpg',
    },
    {
      id: 53,
      name: 'Thriller',
      poster_path:
        'https://image.tmdb.org/t/p/w500/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
    },
    {
      id: 10752,
      name: 'War',
      poster_path:
        'https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg',
    },
    {
      id: 37,
      name: 'Western',
      poster_path:
        'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
    },
  ];

  const dispatch = useDispatch();

  const { listGenres } = useSelector((state) => state.MovieReducer);

  let genres = listGenres.data.genres || [];

  genres = genres.map((genre) => {
    const temp = tempData.find((item) => item.id === genre.id);
    return { ...genre, ...temp };
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='genres-wrapper pt-5'>
        <Row className='mt-3'>
          {genres.length == 0 ? (
            <Spinner color='danger' />
          ) : (
            genres.map((genre) => (
              <Col
                key={genre.id}
                xs={6}
                md={4}
                lg={3}
                className='mb-3 wrapper-item'
              >
                <Link to={`/genres/${genre.id}`}>
                  <Card inverse className='card-genres-wrapper'>
                    <CardImgOverlay>
                      <CardTitle tag='h5' className='card-title mb-3'>
                        <Badge>{genre.name}</Badge>
                      </CardTitle>
                    </CardImgOverlay>
                    <CardImg
                      width='100%'
                      src={genre.poster_path}
                      alt='Card image cap'
                      className='movie-image'
                    />
                  </Card>
                </Link>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Genres;
