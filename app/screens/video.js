import React, { Component } from 'react';
import { Container, Content, Body, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

export default class Video extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Videos',
			headerBackTitle: null,
			headerStyle: {
				backgroundColor: '#FFF'
			}
		};
	};

	componentDidMount() {
		this.setState({ video: this.props.navigation.getParam('video') });
	}

	render() {
		const { video } = this.state;

		return (
			<Container>
				<Content>
					<YouTube videoId={video.url} play={true} fullscreen={true} loop={false} style={styles.video} />
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
	},
	video: {
		alignSelf: 'stretch'
	}
});
