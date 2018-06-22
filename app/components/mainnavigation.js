import Home from '../screens/home';
import About from '../screens/about';
import ClassScreen from '../screens/class';
import Classes from '../screens/classes';
import Photos from '../screens/photos';
import Rewards from '../screens/rewards';
import Notifications from '../screens/notification';

import { createStackNavigator } from 'react-navigation';

const MainNavigation = createStackNavigator({
	Home: {
		screen: Home
	},
	About: {
		screen: About
	},
	Class: {
		screen: ClassScreen
	},
	Classes: {
		screen: Classes
	},
	Photos: {
		screen: Photos
	},
	Rewards: {
		screen: Rewards
	},
	Notifications: {
		screen: Notifications
	}
});

export default MainNavigation;
