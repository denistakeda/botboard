import React, {PropTypes, PureComponent} from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import { getUserDetails } from '../../BotBoardActions';


const mapStateToProps = ({ bot,  routing }) => ({
  userDetails: R.pathOr({}, ['userDetails'], bot),
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (botId, userId) => dispatch(getUserDetails(botId, userId)),
});

class UserDetailPage extends PureComponent {
  static propTypes = {
    userDetails: PropTypes.object,

    getUserInfo: PropTypes.func,
  };

  componentDidMount() {
    this.props.getUserInfo(this.props.routeParams.botId, this.props.routeParams.userId);
  }


  render() {
    const {
      name,
    } = this.props.userDetails;
    return (
      <div>
        <h1>{ name }</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailPage)
