import callApi from '../../util/apiCaller';
import { browserHistory } from 'react-router';

// Export Constants
export const SET_PATH = 'SET_PATH';
export const INSERT_BOT = 'INSERT_BOT';
export const FETCH_BOTS = 'FETCH_BOTS';
export const FETCH_BOT_DETAILS = 'FETCH_BOT_DETAILS';

// Export Actions
export const setPath = (path, value) => ({
  type: SET_PATH,
  path,
  value
});

export const insertBot = botData => ({
  type: INSERT_BOT,
  botData
});

export const fetchBots = bots => ({
  type: FETCH_BOTS,
  bots
});

export const fetchBotDetails = details => ({
  type: FETCH_BOT_DETAILS,
  details,
});

export const addBot = botData => dispatch =>
  callApi('bots', 'post', botData)
    .then(res => dispatch(insertBot(res)))
    .then(_ => browserHistory.push('/'));

export const getBots = () => dispatch =>
  callApi('bots', 'get')
    .then(res => dispatch(fetchBots(res)));

export const getBotDetails = id => dispatch =>
  callApi(`bots/${id}`, 'get')
    .then(res => dispatch(fetchBotDetails(res)));

