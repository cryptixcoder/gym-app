import React from 'react';
import { Container, Content, Card, CardItem, Body, Text, Left, Right, Thumbnail } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default (props) => {
	return (
		<Card>
			<CardItem>
				<Left>
					<Thumbnail source={require('../assets/images/logo.png')} />
					<Body>
						<Text style={styles.rewardTitleText}>Get 20% Off</Text>
						<Text style={styles.rewardContentText}>When you take three classes. Get One Free!</Text>
					</Body>
				</Left>
			</CardItem>
			<CardItem button onPress={() => {}}>
				<Text>Redeem Reward</Text>
			</CardItem>
		</Card>
	);
};

const styles = StyleSheet.create({
	rewardTitleText: {},
	rewardContentText: {}
});
