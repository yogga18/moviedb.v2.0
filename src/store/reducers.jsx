import { combineReducers } from 'redux';
import KontakReducer from './about/reducer';
import MovieReducer from './movie/reducer';

export default combineReducers({
  KontakReducer,
  MovieReducer,
});
