import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router";

// Import Style
import styles from './BotBoardPage.css';

const BotBoardPage = ({

}) => (
  <div className={styles['bot-board']}>
    <Link to="/bots/new">
      <button className="btn btn-primary">
        <FormattedMessage id="addBot"/>
      </button>
    </Link>
  </div>
);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

BotBoardPage.propTypes = {
  botList: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BotBoardPage);
