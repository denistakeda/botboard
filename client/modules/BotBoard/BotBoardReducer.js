// Import Actions
import {
  SET_PATH,
  INSERT_BOT,
  FETCH_BOTS,
  FETCH_BOT_DETAILS
} from './BotBoardActions';

import R from 'ramda';

// Initial State
const initialState = {
  list: [],
  candidate: {
    name: '',
    status: '',
  },
  botDetails: {}
};



const BotBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATH:
      return R.assocPath(action.path, action.value, state);
    case INSERT_BOT:
      return R.evolve({list: R.append(action.botData)}, state);
    case FETCH_BOTS:
      return R.assoc('list', action.bots, state);
    case FETCH_BOT_DETAILS:
      return R.assoc('botDetails', action.details, state);
    default:
      return state;
  }
};

export default BotBoardReducer;
