import { combineReducers } from 'redux';

import warsReducer from './wars';

const rootReducer = combineReducers({
  wars: warsReducer,
});

export default rootReducer;
