import React, {PropTypes, PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import R from 'ramda';
import { getBotDetails } from '../../BotBoardActions';
import moment from 'moment';


const mapStateToProps = ({ bot,  routing }) => ({
  botDetails: R.pathOr({}, ['botDetails'], bot),
});

const mapDispatchToProps = (dispatch) => ({
  getBotInfo: botId => dispatch(getBotDetails(botId)),
});

class BotDetailPage extends PureComponent {
  static propTypes = {
    botId: PropTypes.string,
    botDetails: PropTypes.object,

    getBotInfo: PropTypes.func,
  };

  componentDidMount() {
    this.props.getBotInfo(this.props.routeParams.botId);
  }


  render() {
    const {
      _id,
      name,
      status,
      created,
      users = []
    } = this.props.botDetails;
    return (
      <div>
        <h1>{ name }</h1>
        <div>Status: { status }</div>
        <div>Created { moment(created).fromNow() }</div>

        <h2>Users</h2>
        { users.map(
          user =>
            <div key={user._id}>
              <Link to={ `/bots/${_id}/users/${user._id}`} >{ user.name }</Link>
            </div>
        ) }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BotDetailPage)
