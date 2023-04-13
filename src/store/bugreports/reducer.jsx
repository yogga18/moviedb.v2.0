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
} from './actionTypes';

const initialState = {
  postBugReportsReducer: {
    isLoading: false,
    data: [],
    error: null,
  },
  getAllBugs: {
    isLoading: false,
    data: [],
    error: null,
  },
  getAllBugsUserSide: {
    isLoading: false,
    data: [],
    error: null,
  },
};

const postBugReportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_BUG_REPORTS_REQUEST:
      return (state = {
        ...state,
        postBugReportsReducer: {
          ...state.postBugReportsReducer,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case POST_BUG_REPORTS_SUCCESS:
      return (state = {
        ...state,
        postBugReportsReducer: {
          ...state.postBugReportsReducer,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case POST_BUG_REPORTS_FAILURE:
      return (state = {
        ...state,
        postBugReportsReducer: {
          ...state.getAllBugs,
          isLoading: false,
          data: [],
          error: action.payload.error,
        },
      });

    case GET_ALL_REPORTS_BUG_REQUEST:
      return (state = {
        ...state,
        getAllBugs: {
          ...state.getAllBugs,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_ALL_REPORTS_BUG_SUCCESS:
      return (state = {
        ...state,
        getAllBugs: {
          ...state.getAllBugs,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_ALL_REPORTS_BUG_FAILURE:
      return (state = {
        ...state,
        getAllBugs: {
          ...state.getAllBugs,
          isLoading: false,
          data: [],
          error: action.payload.error,
        },
      });

    case GET_ALL_REPORTS_BUG_USER_SIDE_REQUEST:
      return (state = {
        ...state,
        getAllBugsUserSide: {
          ...state.getAllBugsUserSide,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case GET_ALL_REPORTS_BUG_USER_SIDE_SUCCESS:
      return (state = {
        ...state,
        getAllBugsUserSide: {
          ...state.getAllBugsUserSide,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case GET_ALL_REPORTS_BUG_USER_SIDE_FAILURE:
      return (state = {
        ...state,
        getAllBugsUserSide: {
          ...state.getAllBugsUserSide,
          isLoading: false,
          data: [],
          error: action.payload.error,
        },
      });

    default:
      return state;
  }
};

export default postBugReportsReducer;
