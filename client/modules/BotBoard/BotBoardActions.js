import callApi from '../../util/apiCaller';
import { browserHistory } from 'react-router';

// Export Constants
export const SET_PATH = 'SET_PATH';
export const INSERT_BOT = 'INSERT_BOT';

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

export const addBot = botData => dispatch =>
  callApi('bots', 'post', botData)
    .then(res => dispatch(insertBot(res)))
    .then(_ => browserHistory.push('/'));

