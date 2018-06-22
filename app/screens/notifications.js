import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Notifications extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Upcoming Classes',
			headerBackTitle: null,
			headerStyle: {
				backgroundColor: '#FFF'
			}
		};
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>Home</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
