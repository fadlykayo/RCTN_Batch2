import { combineReducers } from 'redux';
import userReducers from './User';
import loadingReducers from './Loading';

const rootReducers = combineReducers({
  user: userReducers,
  loading: loadingReducers,
});

export default rootReducers;
