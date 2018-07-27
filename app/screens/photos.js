import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { View, Dimensions, StyleSheet } from 'react-native';

import Gallery from '../components/gallery';

const images = [
	{
		uri:
			'https://images.unsplash.com/photo-1506197061617-7f5c0b093236?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=418764a3f148dde8a8debcea492f9156&auto=format&fit=crop&w=1305&q=80',
		id: '1',
		title: 'test',
		description: 'test'
	},
	{
		uri:
			'https://images.unsplash.com/photo-1517498559795-28a423c31125?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d40d06e284aae2df1f87cd17be6e68f7&auto=format&fit=crop&w=1350&q=80',
		id: '2',
		title: 'test',
		description: 'test'
	},
	{
		uri:
			'https://images.unsplash.com/photo-1520536194455-348162e0fe90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db29894cd7595364d6b8539bd25d62df&auto=format&fit=crop&w=1350&q=80',
		id: '3',
		title: 'test',
		description: 'test'
	}
];

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

	constructor() {
		super();

		this.state = {
			index: 0,
			shown: false
		};

		this.openLightbox = (index) => {
			this.setState({ index, shown: true });
		};

		this.hideLightbox = () => {
			this.setState({ index: 0, shown: false });
		};
	}

	render() {
		const { index, shown } = this.state;
		return (
			<Container>
				<Content>
					<Gallery images={images} />
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
