import axios from 'axios';
import { base_url } from '../../config/api/api_helper';

import {
  GET_LIST_KONTAK_REQUEST,
  GET_LIST_KONTAK_SUCCESS,
  GET_LIST_KONTAK_FAILURE,
} from './actionTypes';

export const getListKontak = () => {
  return async (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_KONTAK_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    // hit api
    axios({
      method: 'GET',
      url: `${base_url}todos/1`,
    })
      .then((response) => {
        // success
        dispatch({
          type: GET_LIST_KONTAK_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // error
        dispatch({
          type: GET_LIST_KONTAK_FAILURE,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.message,
          },
        });
      });
  };
};
