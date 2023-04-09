import {
  POST_BUG_REPORTS_REQUEST,
  POST_BUG_REPORTS_SUCCESS,
  POST_BUG_REPORTS_FAILURE,
} from './actionTypes';

const initialState = {
  postBugReportsReducer: {
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
