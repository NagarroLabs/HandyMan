import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import loginReducer from './loginReducer';

export default combineReducers({ jobs: jobReducer, isLoggedIn: loginReducer });
