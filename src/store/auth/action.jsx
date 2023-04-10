import { auth, googleProvider } from '../../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import { addDoc, collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../config/firebase';

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
  CREATE_USER_ROLE_REQUEST,
  CREATE_USER_ROLE_SUCCESS,
  CREATE_USER_ROLE_FAILURE,
  GET_USER_ROLE_REQUEST,
  GET_USER_ROLE_SUCCESS,
  GET_USER_ROLE_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
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

export const createUserRole = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_USER_ROLE_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    try {
      const res = await addDoc(collection(db, 'users'), payload);

      dispatch({
        type: CREATE_USER_ROLE_SUCCESS,
        payload: {
          isLoading: false,
          data: res,
          error: null,
        },
      });

      return { success: true, data: res };
    } catch (error) {
      dispatch({
        type: CREATE_USER_ROLE_FAILURE,
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

export const getRoleUser = (payload) => {
  let dataFireStore;

  return async (dispatch) => {
    dispatch({
      type: GET_USER_ROLE_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        isLogin: false,
        error: null,
      },
    });

    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('uuid', '==', payload.uid)); // query getData by uuid
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0]; // getFirst data and popup array -> object
        const userData = { id: userDoc.id, ...userDoc.data() }; // get data from object and add id from document id in firestore database
        dataFireStore = userData;
      }

      let user = {
        email: payload.email,
        emailVerified: payload.emailVerified,
        refreshToken: payload.refreshToken,
        accessToken: payload.accessToken,
        uid: payload.uid,
        photoURL: payload.photoURL,
        role: dataFireStore.role,
        idDocFireStore: dataFireStore.id,
      };

      dispatch({
        type: GET_USER_ROLE_SUCCESS,
        payload: {
          isLoading: false,
          data: user,
          isLogin: true,
          error: null,
        },
      });

      return { success: true, data: user, isLogin: true };
    } catch (error) {
      dispatch({
        type: GET_USER_ROLE_FAILURE,
        payload: {
          isLoading: false,
          data: [],
          isLogin: false,
          error: error.message,
        },
      });

      return { success: false, error, isLogin: false };
    }
  };
};

export const fetchAllUsers = (payload) => {
  let resultUsers = [];

  return async (dispatch) => {
    dispatch({
      type: GET_ALL_USERS_REQUEST,
      payload: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        const res = {
          id_document: doc.id,
          ...doc.data(),
        };

        resultUsers.push(res);
      });

      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: {
          isLoading: false,
          data: resultUsers,
          error: null,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_FAILURE,
        payload: {
          isLoading: false,
          data: [],
          error: error.message,
        },
      });
    }
  };
};
