import { combineReducers } from 'redux';
import userReducers from './User';

const rootReducers = combineReducers({
  user: userReducers,
});

export default rootReducers;
