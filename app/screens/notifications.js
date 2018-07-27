import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Notifications extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Notifications',
			headerBackTitle: null,
			headerStyle: {
				backgroundColor: '#FFF'
			}
		};
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>No Notifications</Text>
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
