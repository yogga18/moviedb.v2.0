import {
  addDoc,
  collection,
  getDocs,
  where,
  query,
  getDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import {
  POST_BUG_REPORTS_REQUEST,
  POST_BUG_REPORTS_SUCCESS,
  POST_BUG_REPORTS_FAILURE,
  GET_ALL_REPORTS_BUG_REQUEST,
  GET_ALL_REPORTS_BUG_SUCCESS,
  GET_ALL_REPORTS_BUG_FAILURE,
  GET_ALL_REPORTS_BUG_USER_SIDE_REQUEST,
  GET_ALL_REPORTS_BUG_USER_SIDE_SUCCESS,
  GET_ALL_REPORTS_BUG_USER_SIDE_FAILURE,
  GET_REPORTS_BUG_BY_ID_REQUEST,
  GET_REPORTS_BUG_BY_ID_SUCCESS,
  GET_REPORTS_BUG_BY_ID_FAILURE,
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

export const fetchAllBugs = (payload) => {
  let resultBugs = [];

  return async (dispatch) => {
    dispatch({
      type: GET_ALL_REPORTS_BUG_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    try {
      const querySnapshot = await getDocs(collection(db, 'bug_reports'));
      querySnapshot.forEach((doc) => {
        const res = {
          id_document: doc.id,
          ...doc.data(),
        };

        resultBugs.push(res);
      });

      dispatch({
        type: GET_ALL_REPORTS_BUG_SUCCESS,
        payload: {
          isLoading: false,
          data: resultBugs,
          error: null,
        },
      });

      return { success: true, data: resultBugs };
    } catch (error) {
      dispatch({
        type: GET_ALL_REPORTS_BUG_FAILURE,
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

export const fetchAllBugsUserSide = (payload) => {
  let dataFireStore = [];
  return async (dispatch) => {
    dispatch({
      type: GET_ALL_REPORTS_BUG_USER_SIDE_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    try {
      const usersRef = collection(db, 'bug_reports');
      const q = query(usersRef, where('uuid', '==', payload)); // query getData by uuid
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const userData = { id_document: doc.id, ...doc.data() };
          dataFireStore.push(userData);
        });
      }

      dispatch({
        type: GET_ALL_REPORTS_BUG_USER_SIDE_SUCCESS,
        payload: {
          isLoading: false,
          data: dataFireStore,
          error: null,
        },
      });

      return { success: true, data: dataFireStore };
    } catch (error) {
      dispatch({
        type: GET_ALL_REPORTS_BUG_USER_SIDE_FAILURE,
        payload: {
          isLoading: false,
          data: [],
          error: error.message,
        },
      });

      return { success: false, error };
    }
  };
};

export const fetchBugById = (payload) => {
  let dataFireStore;

  return async (dispatch) => {
    dispatch({
      type: GET_REPORTS_BUG_BY_ID_REQUEST,
      payload: {
        isLoading: true,
        data: {},
        error: null,
      },
    });

    try {
      const bugsReportsRef = doc(db, 'bug_reports', payload.id);
      const docSnapshot = await getDoc(bugsReportsRef);

      if (docSnapshot.exists()) {
        const bugData = { id_document: docSnapshot.id, ...docSnapshot.data() };
        dataFireStore = bugData;
      }

      console.log('dataFireStore', dataFireStore);

      dispatch({
        type: GET_REPORTS_BUG_BY_ID_SUCCESS,
        payload: {
          isLoading: false,
          data: dataFireStore,
          error: null,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_REPORTS_BUG_BY_ID_FAILURE,
        payload: {
          isLoading: false,
          data: {},
          error: error.message,
        },
      });
    }
  };
};
