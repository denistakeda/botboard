/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import bot from './modules/BotBoard/BotBoardReducer';
import { routerReducer } from 'react-router-redux';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  bot,
  routing: routerReducer,
});
