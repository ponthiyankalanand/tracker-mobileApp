import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screen/login';
import Home from '../screen/home';
import SignUp from '../screen/webViewSignup';

const screens={
	Login: {
		screen: Login
	},
	Home: {
		screen: Home
	},
	SignUp: {
		screen: SignUp
	}
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);  