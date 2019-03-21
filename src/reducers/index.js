import { combineReducers } from 'redux';
import auth from './authReducer';
import player from './playerReducer';

export default combineReducers({
  auth,
  player
});