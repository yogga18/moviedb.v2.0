import {
  POST_BUG_REPORTS_REQUEST,
  POST_BUG_REPORTS_SUCCESS,
  POST_BUG_REPORTS_FAILURE,
} from './actionTypes';

const initialState = {
  postBugReports: {
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
        postBugReports: {
          ...state.postBugReports,
          isLoading: true,
          data: [],
          error: null,
        },
      });

    case POST_BUG_REPORTS_SUCCESS:
      return (state = {
        ...state,
        postBugReports: {
          ...state.postBugReports,
          isLoading: false,
          data: action.payload.data ?? [],
          error: null,
        },
      });

    case POST_BUG_REPORTS_FAILURE:
      return (state = {
        ...state,
        postBugReports: {
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
