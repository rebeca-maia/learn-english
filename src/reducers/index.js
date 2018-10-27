import { combineReducers } from 'redux';

import singupReducer from './singupReducer';
import authReducer from './authReducer';

export default combineReducers({
  singupReducer,
  authReducer,
});
