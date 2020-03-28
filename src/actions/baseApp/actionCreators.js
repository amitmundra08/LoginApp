import {TypeKeys} from './actions';
import {ApiRequestStatus} from '../../Models/model';
import {strings, appConstants} from '../../constants';

const data = {
  user: [
    {
      id: 1,
      name: 'test1',
      age: '11',
      gender: 'male',
      email: 'test1@gmail.com',
      phoneNo: '9415346313',
    },
    {
      id: 2,
      name: 'test2',
      age: '12',
      gender: 'male',
      email: 'test2@gmail.com',
      phoneNo: '9415346314',
    },
    {
      id: 3,
      name: 'test3',
      age: '13',
      gender: 'male',
      email: 'test3@gmail.com',
      phoneNo: '9415346315',
    },
    {
      id: 4,
      name: 'test4',
      age: '14',
      gender: 'male',
      email: 'test4@gmail.com',
      phoneNo: '9415346316',
    },
    {
      id: 5,
      name: 'test5',
      age: '15',
      gender: 'male',
      email: 'test5@gmail.com',
      phoneNo: '9415346317',
    },
    {
      id: 6,
      name: 'test6',
      age: '16',
      gender: 'male',
      email: 'test6@gmail.com',
      phoneNo: '9415346318',
    },
  ],
};

export const loginUser = (userName, password, navigation) => {
  return async dispatch => {
    dispatch(setLoadingUserdataStatus(ApiRequestStatus.PENDING));
    setTimeout(() => {
      if (
        userName === appConstants.userName &&
        password === appConstants.password
      ) {
        const responseData = data;
        dispatch(setErrorMessage(''));
        dispatch(setDashboardData(responseData));
        dispatch(setUser({userName}));
        navigation.navigate('Home');
        dispatch(setLoadingUserdataStatus(ApiRequestStatus.SUCCESS));
      } else {
        dispatch(setErrorMessage(strings.wrong_credentials));
        dispatch(setLoadingUserdataStatus(ApiRequestStatus.FAILED));
      }
    }, 500);
  };
};

export const setUser = loggedInUser => ({
  type: TypeKeys.SET_USER,
  loggedInUser,
});

export const setLoadingUserdataStatus = loadingUserdataStatus => ({
  type: TypeKeys.SET_USER_LOADING_STATUS,
  loadingUserdataStatus,
});

export const setErrorMessage = errorMessage => ({
  type: TypeKeys.SET_ERROR_MESSAGE,
  errorMessage,
});

export const setDashboardData = dashBoardData => ({
  type: TypeKeys.SET_DASHBOARD_DATA,
  dashBoardData,
});
