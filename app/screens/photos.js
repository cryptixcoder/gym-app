import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Photos extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Photos',
			headerBackTitle: null,
			headerTruncatedBackTitle: null,
			headerTintColor: '#000',
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
