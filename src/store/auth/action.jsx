import axios from 'axios';
import { auth, googleProvider } from '../../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import {
  REGISTER_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_SUCCESS,
  REGISTER_WITH_EMAIL_FAILURE,
  REGISTER_WITH_GOOGLE_REQUEST,
  REGISTER_WITH_GOOGLE_FAILURE,
  REGISTER_WITH_GOOGLE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './actionTypes';

export const registerWithEmail = (payload) => {
  const { email, password } = payload;

  return async (dispatch) => {
    dispatch({
      type: REGISTER_WITH_EMAIL_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({
        type: REGISTER_WITH_EMAIL_SUCCESS,
        payload: {
          loading: false,
          data: result ?? [],
          errorMessage: false,
        },
      });
      // custom response karena server tidak mengembalikan response success
      return { success: true, data: result };
    } catch (error) {
      dispatch({
        type: REGISTER_WITH_EMAIL_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
      // custom response karena server tidak mengembalikan response failure
      return { success: false, error, data: [] };
    }
  };
};

export const registerWithGoogle = () => {
  return async (dispatch) => {
    dispatch({
      type: REGISTER_WITH_GOOGLE_REQUEST,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch({
        type: REGISTER_WITH_GOOGLE_SUCCESS,
        payload: {
          loading: false,
          data: result ?? [],
          errorMessage: false,
        },
      });
      // custom response karena server tidak mengembalikan response success
      return { success: true, data: result };
    } catch (error) {
      dispatch({
        type: REGISTER_WITH_GOOGLE_FAILURE,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
      // custom response karena server tidak mengembalikan response failure
      return { success: false, error, data: [] };
    }
  };
};

export const loginWithEmail = (payload) => {
  const { email, password } = payload;

  return async (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        isLoading: true,
        isLogin: false,
        data: [],
        error: null,
      },
    });

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          isLoading: false,
          isLogin: true,
          data: response ?? [],
          error: null,
        },
      });

      // custom response karena server tidak mengembalikan response success
      return { success: true, data: response, isLogin: true };
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          isLoading: false,
          isLogin: false,
          data: [],
          error: error.message,
        },
      });

      // custom response karena server tidak mengembalikan response failure
      return { success: false, error, isLogin: false };
    }
  };
};

export const justLogout = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST,
      payload: {
        isLoading: true,
        isLogin: true,
        data: [],
        error: null,
      },
    });

    try {
      await signOut(auth);

      dispatch({
        type: LOGOUT_SUCCESS,
        payload: {
          isLoading: false,
          isLogin: false,
          data: [],
          error: null,
        },
      });

      // custom response karena server tidak mengembalikan response success
      return { success: true, isLogin: false };
    } catch (error) {
      dispatch({
        type: LOGOUT_FAILURE,
        payload: {
          isLoading: false,
          isLogin: true,
          data: [],
          error: error.message,
        },
      });

      // custom response karena server tidak mengembalikan response failure
      return { success: false, error, isLogin: true };
    }
  };
};
