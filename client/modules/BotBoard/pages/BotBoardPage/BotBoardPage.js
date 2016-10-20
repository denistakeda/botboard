import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import compose from 'recompose/compose';
import setPropTypes from 'recompose/setPropTypes';
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes';
import lifecle from 'recompose/lifecycle';
import R from 'ramda';
import { getBots } from '../../BotBoardActions';
import BotSnippet from '../../components/BotSnippet/BotSnippet';

// Import Style
import styles from './BotBoardPage.css';

const mapStateToProps = ({bot}) => ({
  list: bot.list
});

const mapDispatchToProps = (dispatch) => ({
  getBotsList: () => dispatch(getBots()),
});

export class BotBoardPage extends PureComponent {

  static propTypes = {
    list: PropTypes.array,

    getBotsList: PropTypes.func,
  };

  componentDidMount() {
    this.props.getBotsList();
  }

  render() {

    console.log(this.props.list);
    return (
      <div className={ styles['bot-board'] }>
        <div className="row">
          <div className="col-md-12">
            <Link to="/bots/new">
              <button className="btn btn-primary">
                <FormattedMessage id="addBot"/>
              </button>
            </Link>
          </div>
        </div>

        <div className={ `row ${styles['bots-list']}` }>
          { this.props.list.map(
            (bot, index) =>
              <BotSnippet key={ index } bot={ bot } className="col-sm-12 col-md-6 col-lg-4"/>
          ) }
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BotBoardPage);
