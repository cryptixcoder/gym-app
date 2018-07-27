import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import { View, StyleSheet, Text } from 'react-native';

import moment from 'moment';

import * as THEME from '../styles/theme';

export default class ClassScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Class Details',
			headerBackTitle: null,
			headerStyle: {
				backgroundColor: '#FFF'
			}
		};
	};

	state = {
		class: {}
	};

	componentDidMount() {
		this.setState({ class: this.props.navigation.getParam('class') });
	}

	render() {
		return (
			<Container>
				<Content>
					<View style={{ backgroundColor: '#FFF', padding: 10 }}>
						<Text style={styles.className}>{this.state.class.name}</Text>
						<View style={{ flexDirection: 'row', marginTop: 20 }}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 30
								}}
							>
								<Icon name="dollar" style={{ fontSize: 22, marginRight: 10 }} type="FontAwesome" />
								<Text>Free</Text>
							</View>

							<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
								<Icon name="user" style={{ fontSize: 22, marginRight: 10 }} type="FontAwesome" />
								<Text>10 Spots Left</Text>
							</View>
						</View>
					</View>

					<View style={{ padding: 10 }}>
						<Button block style={[ styles.buttonStyle, { marginBottom: 10 } ]}>
							<Text style={{ color: '#FFF' }}>Book Now</Text>
						</Button>

						<Button block style={styles.buttonStyle}>
							<Text style={{ color: '#FFF' }}>Add to Calendar</Text>
						</Button>
					</View>
					<View style={{ padding: 10 }}>
						<View>
							<Text style={styles.labelText}>LOCATION</Text>
							<Text style={styles.contentText}>{this.state.class.location}</Text>
						</View>
						<View>
							<Text style={styles.labelText}>SCHEDULE</Text>
							<Text style={styles.contentText}>
								{moment(this.state.class.date).format('dddd, MMM D, YYYY')}
							</Text>
							<Text style={styles.contentText}>
								{this.state.class.starttime} - {this.state.class.endtime}
							</Text>
						</View>
						<View>
							<Text style={styles.labelText}>INSTRUCTOR</Text>
							<Text style={styles.contentText}>{this.state.class.instructor}</Text>
						</View>
						<View>
							<Text style={styles.labelText}>CLASS DESCRIPTION</Text>
							<Text style={styles.contentText}>{this.state.class.description}</Text>
						</View>
					</View>
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
	className: {
		fontSize: THEME.FONTS.title.size,
		fontWeight: '100'
	},
	labelText: {
		fontSize: THEME.FONTS.subheading.size,
		fontWeight: '700',
		marginBottom: 10,
		marginTop: 20
	},
	contentText: {},
	buttonStyle: {
		color: '#FFF',
		backgroundColor: '#34495e',
		fontSize: 16,
		fontWeight: '700'
	}
});
