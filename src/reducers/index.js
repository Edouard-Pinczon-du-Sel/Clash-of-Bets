import { combineReducers } from 'redux';

import warsReducer from './wars';
import clansReducer from './clans';

const rootReducer = combineReducers({
  wars: warsReducer,
  clans: clansReducer,
});

export default rootReducer;
