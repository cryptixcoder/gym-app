import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';
import { View, StyleSheet, Text, Image } from 'react-native';

import * as THEME from '../styles/theme';

import MenuItem from '../components/menuitem';

export default class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Gym App',
			headerStyle: {
				backgroundColor: '#FFF'
			},
			headerRight: (
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<Icon
						name="qrcode"
						onPress={() => navigation.navigate('LoyaltyCard')}
						type="FontAwesome"
						style={{ marginRight: 10 }}
					/>
					<Icon name="bell" onPress={() => navigation.navigate('Notifications')} type="SimpleLineIcons" />
				</View>
			)
		};
	};

	render() {
		return (
			<Container>
				<Content style={{ backgroundColor: '#FFF' }}>
					<View style={styles.coverContainer}>
						<Image style={styles.logo} source={require('../assets/images/logo.png')} />
					</View>
					<View style={styles.menuContainer}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
							<MenuItem
								label="Classes"
								onPress={() => this.props.navigation.navigate('Classes')}
								icon={<Icon name="event" size={32} color="#000" type="SimpleLineIcons" />}
							/>
							<MenuItem
								label="Photos"
								onPress={() => this.props.navigation.navigate('Photos')}
								icon={<Icon name="picture" size={32} color="#000" type="SimpleLineIcons" />}
							/>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
							<MenuItem
								label="Rewards"
								onPress={() => this.props.navigation.navigate('Rewards')}
								icon={<Icon name="present" size={32} color="#000" type="SimpleLineIcons" />}
							/>
							<MenuItem
								label="About"
								onPress={() => this.props.navigation.navigate('About')}
								icon={<Icon name="question" size={32} color="#000" type="SimpleLineIcons" />}
							/>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	coverContainer: {
		backgroundColor: THEME.COLORS.coverBg,
		padding: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: 150,
		height: 150
	},
	menuContainer: {
		flex: 3
	}
});
