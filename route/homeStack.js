import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screen/login';
import Home from '../screen/home';

const screens={
	Login: {
		screen: Login
	},
	Home: {
		screen: Home
	}
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);  