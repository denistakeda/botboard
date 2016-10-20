import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import BotStatuses from '../../configs/BotStatuses';
import compose from 'recompose/compose';
import setPropTypes from 'recompose/setPropTypes';
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes';
import R from 'ramda';
import { setPath, addBot } from '../../BotBoardActions';

import {
  TextField,
  SelectField,
  MenuItem,
  FlatButton,
} from 'material-ui';

const mapStateToProps = ({ bot }) => ({
  name: R.path(['candidate', 'name'], bot),
  status: R.path(['candidate', 'status'], bot),
});

const mapDispatchToProps = (dispatch) => ({
  setName: value => dispatch(setPath(['candidate', 'name'], value)),
  setStatus: value => dispatch(setPath(['candidate', 'status'], value)),
  addBot: botData => dispatch(addBot(botData)),
});

const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    name: PropTypes.string,
    status: PropTypes.string,

    setName: PropTypes.func,
    setStatus: PropTypes.func,
    addBot: PropTypes.func,
  }),
  connect(mapStateToProps, mapDispatchToProps),
);

const AddBotPage = ({
  name = '',
  status = '',

  setName,
  setStatus,
  addBot,
}) => (
  <div>
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <TextField
          fullWidth
          value={ name }
          onChange={ e => setName(e.target.value)}
          hintText={ <FormattedMessage id="name"/> } />
      </div>
      <div className="col-sm-12 col-md-4">
        <SelectField
          fullWidth
          value={ status }
          onChange={ (e, index, value) => setStatus(value) }>
          { BotStatuses.map(
            (statusId, index) =>
              <MenuItem
                key={ index }
                value={ statusId }
                primaryText={ <FormattedMessage id={ statusId }/> }/>
          ) }
        </SelectField>
      </div>
      <div className="col-sm-12 col-md-2">
        <FlatButton
          disabled={ !name || !status }
          onTouchTap={ _ => addBot({name, status}) }
          label={ <FormattedMessage id="addBot"/> }/>
      </div>
    </div>
  </div>
);

export default enhance(AddBotPage);
