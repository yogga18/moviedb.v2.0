import {
  REGISTER_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_SUCCESS,
  REGISTER_WITH_EMAIL_FAILURE,
  REGISTER_WITH_GOOGLE_REQUEST,
  REGISTER_WITH_GOOGLE_SUCCESS,
  REGISTER_WITH_GOOGLE_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './actionTypes';

const initialState = {
  regisWithEmail: {
    isLoading: false,
    data: [],
    error: null,
  },
  regisWithGoogle: {
    isLoading: false,
    data: [],
    error: null,
  },
  login: {
    isLoading: false,
    isLogin: false,
    data: [],
    error: null,
  },
  logout: {
    isLoading: false,
    isLogout: false,
    data: [],
    error: null,
  },
};

const regisWithEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_WITH_EMAIL_REQUEST:
      return (state = {
        ...state,
        regisWithEmail: {
          ...state.regisWithEmail,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case REGISTER_WITH_EMAIL_SUCCESS:
      return (state = {
        ...state,
        regisWithEmail: {
          ...state.regisWithEmail,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case REGISTER_WITH_EMAIL_FAILURE:
      return (state = {
        ...state,
        regisWithEmail: {
          ...state.regisWithEmail,
          isLoading: false,
          data: [],
          error: action.payload.error,
        },
      });

    case REGISTER_WITH_GOOGLE_REQUEST:
      return (state = {
        ...state,
        regisWithGoogle: {
          ...state.regisWithGoogle,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case REGISTER_WITH_GOOGLE_SUCCESS:
      return (state = {
        ...state,
        regisWithGoogle: {
          ...state.regisWithGoogle,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case REGISTER_WITH_GOOGLE_FAILURE:
      return (state = {
        ...state,
        regisWithGoogle: {
          ...state.regisWithGoogle,
          isLoading: false,
          data: [],
          error: action.payload.error,
        },
      });

    case LOGIN_REQUEST:
      return (state = {
        ...state,
        login: {
          ...state.login,
          isLoading: true,
          isLogin: false,
          data: [],
          error: null,
        },
      });

    case LOGIN_SUCCESS:
      return (state = {
        ...state,
        login: {
          ...state.login,
          isLoading: true,
          data: action.payload.data ?? [],
          error: null,
          isLogin: true,
        },
      });

    case LOGIN_FAILURE:
      return (state = {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          isLogin: false,
          data: [],
          error: action.payload.error,
        },
      });

    case LOGOUT_REQUEST:
      return (state = {
        ...state,
        logout: {
          ...state.logout,
          isLoading: true,
          isLogout: false,
          data: [],
          error: null,
        },
      });

    case LOGOUT_SUCCESS:
      return (state = {
        ...state,
        logout: {
          ...state.logout,
          isLoading: false,
          isLogout: true,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case LOGOUT_FAILURE:
      return (state = {
        ...state,
        logout: {
          ...state.logout,
          isLoading: false,
          isLogout: false,
          data: [],
          error: action.payload.error,
        },
      });

    default:
      return state;
  }
};

export default regisWithEmailReducer;
