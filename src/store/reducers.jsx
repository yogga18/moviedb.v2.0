import { combineReducers } from 'redux';
import KontakReducer from './about/reducer';
import MovieReducer from './movie/reducer';
import AuthReducer from './auth/reducer';
import BugReducer from './bugreports/reducer';

export default combineReducers({
  KontakReducer,
  MovieReducer,
  AuthReducer,
  BugReducer,
});
