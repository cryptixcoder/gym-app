import Home from '../screens/home';
import About from '../screens/about';
import ClassScreen from '../screens/class';
import Classes from '../screens/classes';
import Photos from '../screens/photos';
import Rewards from '../screens/rewards';
import Notifications from '../screens/notifications';
import LoyaltyCard from '../screens/loyaltycard';
import Videos from '../screens/videos';
import Video from '../screens/video';

import { createStackNavigator } from 'react-navigation';

const MainNavigation = createStackNavigator(
	{
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
		},
		Videos: {
			screen: Videos
		},
		Video: {
			screen: Video
		}
	},
	{
		navigationOptions: {
			gesturesEnabled: false,
			headerBackTitle: null,
			headerTruncatedBackTitle: null,
			headerTintColor: '#000'
		},
		headerStyle: {
			backgroundColor: '#FFF'
		}
	}
);

const RootStack = createStackNavigator(
	{
		Main: {
			screen: MainNavigation
		},
		LoyaltyCard: {
			screen: LoyaltyCard
		}
	},
	{
		mode: 'modal',
		headerMode: 'none'
	}
);

export default RootStack;
