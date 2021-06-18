import { combineReducers } from 'redux';
import trucks from './trucks';
import auth from './auth';
import usersReducer from './users';
export const reducers = combineReducers({trucks,auth,usersReducer});