import React, { Component } from 'react';
import { Container, Content, Body, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';

import VideoBlock from '../components/videoblock';

const videos = [
	{
		title: 'Test Video 1',
		description: 'This is the video description.',
		url: 'YdB1HMCldJY',
		thumbnail: 'http://i3.ytimg.com/vi/YdB1HMCldJY/maxresdefault.jpg'
	},
	{
		title: 'Test Video 2',
		description: 'This is the video description.',
		url: 'YdB1HMCldJY',
		thumbnail: 'http://i3.ytimg.com/vi/YdB1HMCldJY/maxresdefault.jpg'
	},
	{
		title: 'Test Video 3',
		description: 'This is the video description.',
		url: 'YdB1HMCldJY',
		thumbnail: 'http://i3.ytimg.com/vi/YdB1HMCldJY/maxresdefault.jpg'
	}
];

export default class Videos extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Videos',
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
					{videos.map((video) => (
						<VideoBlock
							video={video}
							onPress={() => {
								this.props.navigation.navigate('Video', {
									video: video
								});
							}}
						/>
					))}
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
