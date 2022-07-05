import clansData from 'src/components/data/clans';
import { FETCH_CLANS } from '../actions/clans';

export const initialState = {
  list: clansData,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CLANS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
