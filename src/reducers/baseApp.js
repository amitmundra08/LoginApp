import {TypeKeys} from '../actions/baseApp/actions';
import {ApiRequestStatus} from '../Models/model';

export class InitialState {
  loadingUserdataStatus = ApiRequestStatus.DEFAULT;
  errorMessage = '';
  dashBoardData = {};
  loggedInUser = {};
}

export default (state = new InitialState(), action) => {
  switch (action.type) {
    case TypeKeys.SET_USER_LOADING_STATUS: {
      const {loadingUserdataStatus} = action;
      return Object.assign({}, state, {loadingUserdataStatus});
    }
    case TypeKeys.SET_USER: {
      const {loggedInUser} = action;
      return Object.assign({}, state, {loggedInUser});
    }
    case TypeKeys.SET_ERROR_MESSAGE: {
      const {errorMessage} = action;
      return Object.assign({}, state, {errorMessage});
    }
    case TypeKeys.SET_DASHBOARD_DATA: {
      const {dashBoardData} = action;
      return Object.assign({}, state, {dashBoardData});
    }
    default:
      return state;
  }
};
