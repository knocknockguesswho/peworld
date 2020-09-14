import {combineReducers} from 'redux';
import auth from './auth';
import users from './users'
/*
  import <reducer_name> from '<source>';
*/

export default combineReducers({auth, users});
