import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

export default class About extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'About',
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
					<Card>
						<CardItem>
							<Body>
								<Text>
									This is your about section. Here you can talk about your gym and what inspires you.
								</Text>
							</Body>
						</CardItem>
					</Card>
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
