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

const initialState = {
  movieUpcomming: {
    isLoading: false,
    data: [],
    error: null,
  },
  getMovieById: {
    isLoading: false,
    data: [],
    error: null,
  },
  searchMovies: {
    isLoading: false,
    data: [],
    error: null,
  },
  listGenres: {
    isLoading: false,
    data: [],
    error: null,
  },
  moviesByGenre: {
    isLoading: false,
    data: [],
    error: null,
  },
  getTrailers: {
    isLoading: false,
    data: [],
    error: null,
  },
  relseMovies: {
    isLoading: false,
    data: [],
    error: null,
  },
  trendingMovies: {
    isLoading: false,
    data: [],
    error: null,
  },
  topRatedMovies: {
    isLoading: false,
    data: [],
    error: null,
  },
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMMING_MOVIES_REQUEST:
      return (state = {
        ...state,
        movieUpcomming: {
          ...state.movieUpcomming,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_UPCOMMING_MOVIES_SUCCESS:
      return (state = {
        ...state,
        movieUpcomming: {
          ...state.movieUpcomming,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_UPCOMMING_MOVIES_FAILURE:
      return (state = {
        ...state,
        movieUpcomming: {
          ...state.movieUpcomming,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    case GET_MOVIES_BY_ID_REQUEST:
      return (state = {
        ...state,
        getMovieById: {
          ...state.getMovieById,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_MOVIES_BY_ID_SUCCESS:
      return (state = {
        ...state,
        getMovieById: {
          ...state.getMovieById,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_MOVIES_BY_ID_FAILURE:
      return (state = {
        ...state,
        getMovieById: {
          ...state.getMovieById,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    case SEARCH_MOVIES_REQUEST:
      return (state = {
        ...state,
        searchMovies: {
          ...state.searchMovies,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case SEARCH_MOVIES_SUCCESS:
      return (state = {
        ...state,
        searchMovies: {
          ...state.searchMovies,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case SEARCH_MOVIES_FAILURE:
      return (state = {
        ...state,
        searchMovies: {
          ...state.searchMovies,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    case GET_GENRES_REQUEST:
      return (state = {
        ...state,
        listGenres: {
          ...state.listGenres,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_GENRES_SUCCESS:
      return (state = {
        ...state,
        listGenres: {
          ...state.listGenres,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_GENRES_FAILURE:
      return (state = {
        ...state,
        listGenres: {
          ...state.listGenres,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    case GET_MOVIES_BY_GENRE_REQUEST:
      return (state = {
        ...state,
        moviesByGenre: {
          ...state.moviesByGenre,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_MOVIES_BY_GENRE_SUCCESS:
      return (state = {
        ...state,
        moviesByGenre: {
          ...state.moviesByGenre,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_MOVIES_BY_GENRE_FAILURE:
      return (state = {
        ...state,
        moviesByGenre: {
          ...state.moviesByGenre,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    case GET_TRAILER_REQUEST:
      return (state = {
        ...state,
        getTrailers: {
          ...state.getTrailers,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_TRAILER_SUCCESS:
      return (state = {
        ...state,
        getTrailers: {
          ...state.getTrailers,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_TRAILER_FAILURE:
      return (state = {
        ...state,
        getTrailers: {
          ...state.getTrailers,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    case GET_RELESE_MOVIES_REQUEST:
      return (state = {
        ...state,
        relseMovies: {
          ...state.relseMovies,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_RELESE_MOVIES_SUCCESS:
      return (state = {
        ...state,
        relseMovies: {
          ...state.relseMovies,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_RELESE_MOVIES_FAILURE:
      return (state = {
        ...state,
        relseMovies: {
          ...state.relseMovies,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    case GET_MOVIES_TRENDING_REQUEST:
      return (state = {
        ...state,
        trendingMovies: {
          ...state.trendingMovies,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_MOVIES_TRENDING_SUCCESS:
      return (state = {
        ...state,
        trendingMovies: {
          ...state.trendingMovies,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_MOVIES_TRENDING_FAILURE:
      return (state = {
        ...state,
        trendingMovies: {
          ...state.trendingMovies,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    case GET_MOVIES_TOP_RETED_REQUEST:
      return (state = {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_MOVIES_TOP_RETED_SUCCESS:
      return (state = {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_MOVIES_TOP_RETED_FAILURE:
      return (state = {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      });

    default:
      return state;
  }
};

export default movies;
