import Login from './login';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/baseApp/actionCreators';

const mapStateToProps = state => ({
  loadingUserdataStatus: state.baseApp.loadingUserdataStatus,
  errorMessage: state.baseApp.errorMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginUser: (userName, password) =>
    dispatch(loginUser(userName, password, ownProps.navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
