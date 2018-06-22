import React, { Component } from 'react';
import { Container } from 'native-base';
import { View, StyleSheet, Text } from 'react-native';

import MenuItem from '../components/menuitem';

export default class Home extends Component {
	render() {
		return (
			<Container>
				<View style={styles.coverContainer}>
					<Image source={{ uri: '' }} />
				</View>
				<View style={styles.menuContainer}>
					<MenuItem label="Classes" onPress={this.props.navigation.navigate('Classes')} />
					<MenuItem label="Photos" onPress={this.props.navigation.navigate('Photos')} />
					<MenuItem label="Rewards" onPress={this.props.navigation.navigate('Rewards')} />
					<MenuItem label="About" onPress={this.props.navigation.navigate('About')} />
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	coverContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	menuContainer: {
		flex: 3
	}
});
