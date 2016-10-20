import React, {PropTypes} from 'react';
import compose from 'recompose/compose';
import setPropTypes from 'recompose/setPropTypes';
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes';
import flattenProp from 'recompose/flattenProp';
import moment from 'moment';
import { Link } from 'react-router';
import styles from './BotSnippet.css';


const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    name: PropTypes.string,
    status: PropTypes.string,
    created: PropTypes.string,
    _id: PropTypes.string,

    className: PropTypes.string,
  }),
  flattenProp('bot')
);

const BotSnippet = enhance(({
  name,
  status,
  created,
  _id,
  className,
}) => {
  return (
    <div className={ className }>
      <div className={ styles['snippet'] }>

        <div className={ `${styles['tytle']} clearfix` }>
          <div className={styles['name']}>
            <Link to={ `/bots/${_id}` }>
              { name }
            </Link>
          </div>
          <div className={`${styles['status']} ${styles[status]}`}>{ status }</div>
        </div>

        <div className={ styles['date'] }>
          { moment(created).fromNow() }
        </div>

        <div className={ styles['links'] }>
          <Link to="/">Dashboard</Link> |
          <Link to={ `/bots/${_id}` }>People</Link>
        </div>
      </div>
    </div>
  );
});

export default BotSnippet
