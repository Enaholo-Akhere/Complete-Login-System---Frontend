import { combineReducers } from 'redux';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer;
