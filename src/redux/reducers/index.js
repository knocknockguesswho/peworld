import {combineReducers} from 'redux';
import auth from './auth';
import users from './users';
import profile from './profile';
import skills from './skills';
import workExperiences from './workExperiences';
import portfolio from './portfolio'
/*
  import <reducer_name> from '<source>';
*/

export default combineReducers({auth, users, profile, skills, workExperiences, portfolio});
