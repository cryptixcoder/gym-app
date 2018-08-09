import React from 'react';
import { Container, Content, Card, CardItem, Body, Text, Left, Right, Thumbnail, Image } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default (props) => {
	const { video, onPress } = props;
	return (
		<Card>
			<CardItem cardBody>
				<Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
			</CardItem>
			<CardItem>
				<Body>
					<Text>{video.description}</Text>
				</Body>
			</CardItem>
			<CardItem
				button
				onPress={() => {
					onPress();
				}}
			>
				<Text>Watch</Text>
			</CardItem>
		</Card>
	);
};

const styles = StyleSheet.create({
	thumbnail: {}
});
