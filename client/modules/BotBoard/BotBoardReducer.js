// Import Actions
import {
  SET_PATH,
  INSERT_BOT,
  FETCH_BOTS
} from './BotBoardActions';

import R from 'ramda';

// Initial State
const initialState = {
  list: [],
  candidate: {
    name: '',
    status: '',
  }
};



const BotBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATH:
      return R.assocPath(action.path, action.value, state);
    case INSERT_BOT:
      return R.evolve({list: R.append(action.botStatus)}, state);
    case FETCH_BOTS:
      return R.assoc('list', action.bots, state);
    default:
      return state;
  }
};

export default BotBoardReducer;
