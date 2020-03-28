import Home from '../screens/Home';
import Login from '../screens/Login';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
const MainStack = createSwitchNavigator(
  {
    Home: {screen: Home, navigationOptions: () => ({header: () => undefined})},
    Login: {
      screen: Login,
      navigationOptions: () => ({header: () => undefined}),
    },
  },
  {
    initialRouteName: 'Login',
  },
);
const MainNavigator = createAppContainer(MainStack);

export default MainNavigator;
