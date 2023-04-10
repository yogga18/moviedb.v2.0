import axios from 'axios';
import { BASE_URL, API_KEY } from '../../config/api/api_helper';
import {
  GET_UPCOMMING_MOVIES_REQUEST,
  GET_UPCOMMING_MOVIES_SUCCESS,
  GET_UPCOMMING_MOVIES_FAILURE,
  GET_MOVIES_BY_ID_REQUEST,
  GET_MOVIES_BY_ID_SUCCESS,
  GET_MOVIES_BY_ID_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
  GET_MOVIES_BY_GENRE_REQUEST,
  GET_MOVIES_BY_GENRE_SUCCESS,
  GET_MOVIES_BY_GENRE_FAILURE,
  GET_TRAILER_REQUEST,
  GET_TRAILER_SUCCESS,
  GET_TRAILER_FAILURE,
  GET_RELESE_MOVIES_REQUEST,
  GET_RELESE_MOVIES_SUCCESS,
  GET_RELESE_MOVIES_FAILURE,
  GET_MOVIES_TRENDING_REQUEST,
  GET_MOVIES_TRENDING_SUCCESS,
  GET_MOVIES_TRENDING_FAILURE,
  GET_MOVIES_TOP_RETED_REQUEST,
  GET_MOVIES_TOP_RETED_SUCCESS,
  GET_MOVIES_TOP_RETED_FAILURE,
} from './actionTypes';

export const getUpcomingMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_UPCOMMING_MOVIES_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}movie/upcoming?api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GET_UPCOMMING_MOVIES_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_UPCOMMING_MOVIES_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getMoviesById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_MOVIES_BY_ID_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}movie/${id}?api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GET_MOVIES_BY_ID_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIES_BY_ID_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};

export const searchMovie = (query) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: {
            loading: false,
            data: response.data.results,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SEARCH_MOVIES_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_GENRES_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}genre/movie/list?api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GET_GENRES_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_GENRES_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getMoviesByGenre = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_MOVIES_BY_GENRE_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}discover/movie?with_genres=${id}&api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GET_MOVIES_BY_GENRE_SUCCESS,
          payload: {
            isLoading: false,
            data: response.data.results,
            error: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIES_BY_GENRE_FAILURE,
          payload: {
            isLoading: false,
            data: [],
            error: error.message,
          },
        });
      });
  };
};

export const getTrailer = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_TRAILER_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GET_TRAILER_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_TRAILER_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getReleseMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_RELESE_MOVIES_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}movie/now_playing?api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GET_RELESE_MOVIES_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_RELESE_MOVIES_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getTrendingMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_MOVIES_TRENDING_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}trending/all/week?api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GET_MOVIES_TRENDING_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIES_TRENDING_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getTopRetedMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_MOVIES_TOP_RETED_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: `${BASE_URL}movie/top_rated?api_key=${API_KEY}`,
    })
      .then((response) => {
        dispatch({
          type: GET_MOVIES_TOP_RETED_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIES_TOP_RETED_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};
