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
  CREATE_USER_ROLE_REQUEST,
  CREATE_USER_ROLE_SUCCESS,
  CREATE_USER_ROLE_FAILURE,
  GET_USER_ROLE_REQUEST,
  GET_USER_ROLE_SUCCESS,
  GET_USER_ROLE_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
} from './actionTypes';

const initialState = {
  regisWithEmail: {
    isLoading: false,
    data: [],
    error: null,
    isLogin: false,
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
  userRole: {
    isLoading: false,
    data: [],
    error: null,
    isLogin: false,
  },
  getUserRole: {
    isLoading: false,
    data: [],
    error: null,
    isLogin: false,
  },
  getAllUsers: {
    isLoading: false,
    data: [],
    error: null,
  },
  getUserById: {
    isLoading: false,
    data: {},
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
          isLogin: false,
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
          isLogin: false,
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
          isLogin: false,
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
          isLoading: false,
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

    case CREATE_USER_ROLE_REQUEST:
      return (state = {
        ...state,
        userRole: {
          ...state.userRole,
          isLoading: true,
          data: [],
          error: null,
          isLogin: false,
        },
      });

    case CREATE_USER_ROLE_SUCCESS:
      return (state = {
        ...state,
        userRole: {
          ...state.userRole,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
          isLogin: false,
        },
      });

    case CREATE_USER_ROLE_FAILURE:
      return (state = {
        ...state,
        userRole: {
          ...state.userRole,
          isLoading: false,
          data: [],
          error: action.payload.error,
          isLogin: false,
        },
      });

    case GET_USER_ROLE_REQUEST:
      return (state = {
        ...state,
        getUserRole: {
          ...state.getUserRole,
          isLoading: true,
          data: [],
          error: null,
          isLogin: false,
        },
      });

    case GET_USER_ROLE_SUCCESS:
      return (state = {
        ...state,
        getUserRole: {
          ...state.getUserRole,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
          isLogin: false,
        },
      });

    case GET_USER_ROLE_FAILURE:
      return (state = {
        ...state,
        getUserRole: {
          ...state.getUserRole,
          isLoading: false,
          data: [],
          error: action.payload.error,
          isLogin: false,
        },
      });

    case GET_ALL_USERS_REQUEST:
      return (state = {
        ...state,
        getAllUsers: {
          ...state.getAllUsers,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_ALL_USERS_SUCCESS:
      return (state = {
        ...state,
        getAllUsers: {
          ...state.getAllUsers,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_ALL_USERS_FAILURE:
      return (state = {
        ...state,
        getAllUsers: {
          ...state.getAllUsers,
          isLoading: false,
          data: [],
          error: action.payload.error,
        },
      });

    case GET_USER_BY_ID_REQUEST:
      return (state = {
        ...state,
        getUserById: {
          ...state.getUserById,
          isLoading: true,
          data: {},
          error: null,
        },
      });

    case GET_USER_BY_ID_SUCCESS:
      return (state = {
        ...state,
        getUserById: {
          ...state.getUserById,
          isLoading: false,
          data: action.payload.data ?? {},
          error: null,
        },
      });

    case GET_USER_BY_ID_FAILURE:
      return (state = {
        ...state,
        getUserById: {
          ...state.getUserById,
          isLoading: false,
          data: {},
          error: action.payload.error,
        },
      });

    default:
      return state;
  }
};

export default regisWithEmailReducer;
