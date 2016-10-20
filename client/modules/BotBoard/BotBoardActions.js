import callApi from '../../util/apiCaller';
import { browserHistory } from 'react-router';

// Export Constants
export const SET_PATH = 'SET_PATH';
export const INSERT_BOT = 'INSERT_BOT';
export const FETCH_BOTS = 'FETCH_BOTS';

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

export const addBot = botData => dispatch =>
  callApi('bots', 'post', botData)
    .then(res => dispatch(insertBot(res)))
    .then(_ => browserHistory.push('/'));

export const getBots = () => dispatch =>
  callApi('bots', 'get')
    .then(res => dispatch(fetchBots(res)));

