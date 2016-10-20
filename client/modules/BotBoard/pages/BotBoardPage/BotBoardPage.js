import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import R from 'ramda';
import { getBots } from '../../BotBoardActions';
import BotSnippet from '../../components/BotSnippet/BotSnippet';
import {
  RaisedButton,
  SelectField,
  MenuItem,
} from 'material-ui';
import { browserHistory } from 'react-router';
import botStatuses from '../../configs/BotStatuses';

// Import Style
import styles from './BotBoardPage.css';

const mapStateToProps = ({bot, routing}) => ({
  list: bot.list,
  filter: R.pathOr('all', ['locationBeforeTransitions', 'query', 'filter'], routing),
});

const mapDispatchToProps = (dispatch) => ({
  getBotsList: () => dispatch(getBots()),
});

export class BotBoardPage extends PureComponent {

  static propTypes = {
    list: PropTypes.array,
    filter: PropTypes.string,

    getBotsList: PropTypes.func,
  };

  componentDidMount() {
    this.props.getBotsList();
  }

  render() {
    return (
      <div className={ styles['bot-board'] }>
        <div className="row">
          <div className="col-md-12">

            <div className={ styles['add-button'] }>
              <RaisedButton
                primary
                label={ <FormattedMessage id="addBot" /> }
                onTouchTap={ _ => browserHistory.push('/bots/new')}/>
            </div>

            <div className={ styles['filter'] }>
              <SelectField
                value={ this.props.filter }
                onChange={ (e, index, value) => browserHistory.push(`/?filter=${value}`) }>
                <MenuItem
                  key="all"
                  value="all"
                  primaryText={ <FormattedMessage id="all"/> }/>

                { botStatuses.map(
                  (status, index) =>
                    <MenuItem
                      key={ index }
                      value={ status }
                      primaryText={ <FormattedMessage id={ status }/> }/>
                ) }
              </SelectField>
            </div>

          </div>
        </div>

        <div className={ `row ${styles['bots-list']}` }>
          { this.props.list
            .filter(({status}) => this.props.filter === 'all' || this.props.filter === status)
            .map(
              bot => <BotSnippet key={ bot._id } bot={ bot } className="col-sm-12 col-md-6 col-lg-4"/>
            ) }
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BotBoardPage);
