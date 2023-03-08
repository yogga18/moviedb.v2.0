import {
  GET_LIST_KONTAK_REQUEST,
  GET_LIST_KONTAK_SUCCESS,
  GET_LIST_KONTAK_FAILURE,
} from './actionTypes';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: [],
        error: null,
      };
    case GET_LIST_KONTAK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        error: null,
      };
    case GET_LIST_KONTAK_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default kontak;
