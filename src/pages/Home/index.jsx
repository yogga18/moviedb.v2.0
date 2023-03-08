import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUpcomingMovies,
  searchMovie,
  getReleseMovies,
  getTrendingMovies,
  getTopRetedMovies,
} from '../../store/actions';
import Navigation from '../../Components/Navigation/Navigation';
import Hero from '../../Components/Hero/Carousel';
import MovieSection from '../../Components/Movie/MovieSection';
import SearchMovie from '../../Components/Movie/SearchMovie';
import ResultSearchMovies from '../../Components/Movie/ResultSearchMovies';
import Footer from '../../Components/Footer';

const HomePage = () => {
  const dispatch = useDispatch();

  const [hide, setHide] = useState(false);

  const {
    movieUpcomming,
    searchMovies,
    relseMovies,
    trendingMovies,
    topRatedMovies,
  } = useSelector((state) => state.MovieReducer);

  const displayHide = ({ hide, query }) => {
    setHide(hide);
    dispatch(searchMovie(query));
  };

  useEffect(() => {
    if (!hide) {
      dispatch(getUpcomingMovies());
      dispatch(getReleseMovies());
      dispatch(getTrendingMovies());
      dispatch(getTopRetedMovies());
    }
  }, [hide]);

  return (
    <Fragment>
      <Navigation />
      <Hero data={trendingMovies} />
      <SearchMovie displayHide={displayHide} />
      {!hide && (
        <Fragment>
          <MovieSection
            data={movieUpcomming}
            titleWrapepr={'Up Comming 🍿'}
            bg_bandage={'danger'}
          />
          <MovieSection
            data={relseMovies}
            titleWrapepr={'Relese Now 🎬'}
            bg_bandage={'success'}
          />
          <MovieSection
            data={trendingMovies}
            titleWrapepr={'Trending 🌟'}
            bg_bandage={'primary'}
          />
          <MovieSection
            data={topRatedMovies}
            titleWrapepr={'Top Rated 💯'}
            bg_bandage={'warning'}
          />
        </Fragment>
      )}
      {hide && <ResultSearchMovies data={searchMovies} />}
      <Footer />
    </Fragment>
  );
};

export default HomePage;
