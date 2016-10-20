/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';
import { syncHistoryWithStore } from 'react-router-redux';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');



export default function App(props) {
  const history = syncHistoryWithStore(browserHistory, props.store);
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <Router history={history}>
          {routes}
        </Router>
      </IntlWrapper>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
