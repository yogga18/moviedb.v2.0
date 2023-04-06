import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { BASE_IMAGE_URL } from '../../config/api/api_helper';

const MovieCard = ({ movies }) => {
  let { isLoading, data } = movies;

  console.log('movies', data);

  return (
    <div>
      <h1>Listing Movie</h1>
      {isLoading && <Spinner color='danger' />}

      {isLoading == false &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <img src={`${BASE_IMAGE_URL}${item.poster_path}`} />
              <p>{item.original_title}</p>
            </div>
          );
        })}

      {isLoading === false && data.length === 0 && (
        <div xs={12} className='text-center'>
          <img src='https://media.giphy.com/media/kc1qe57aesZgI/giphy.gif' />
          <h1 className='text-danger'>Movie Not Found</h1>
        </div>
      )}
    </div>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.any,
};

export default MovieCard;
