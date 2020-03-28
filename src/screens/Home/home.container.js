import Home from './home';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  dashBoardData: state.baseApp.dashBoardData,
  loggedInUser: state.baseApp.loggedInUser,
});

export default connect(mapStateToProps, undefined)(Home);
