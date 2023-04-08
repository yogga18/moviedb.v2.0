import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import {
  POST_BUG_REPORTS_REQUEST,
  POST_BUG_REPORTS_SUCCESS,
  POST_BUG_REPORTS_FAILURE,
} from './actionTypes';

export const postBugReports = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: POST_BUG_REPORTS_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    try {
      const res = await addDoc(collection(db, 'bug_reports'), payload);

      dispatch({
        type: POST_BUG_REPORTS_SUCCESS,
        payload: {
          isLoading: false,
          data: res,
          error: null,
        },
      });

      return { success: true, data: res };
    } catch (error) {
      dispatch({
        type: POST_BUG_REPORTS_FAILURE,
        payload: {
          isLoading: false,
          data: [],
          error: error.message,
        },
      });

      return { success: false, data: [], error: payload.error };
    }
  };
};
