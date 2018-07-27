import React, { Component } from 'react';
import { Container, Content, Body, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';

import Reward from '../components/reward';

export default class Rewards extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Rewards',
			headerBackTitle: null,
			headerStyle: {
				backgroundColor: '#FFF'
			}
		};
	};
	render() {
		return (
			<Container>
				<Content>
					<Reward />
					<Reward />
					<Reward />
				</Content>
			</Container>
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
