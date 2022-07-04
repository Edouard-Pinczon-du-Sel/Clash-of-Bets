import warsData from 'src/components/data/wars';
import { FETCH_WARS } from '../actions/wars';

export const initialState = {
  list: warsData,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_WARS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
