import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Content, Header, Icon, Left, Button } from 'native-base';
import QRCode from 'react-native-qrcode';

export default class LoyaltyCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loyaltyCardNumber: '0000000000000000',
			visible: false
		};
	}
	render() {
		return (
			<Container style={{ backgroundColor: '#FFF' }}>
				<Header transparent>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon style={{ color: '#000' }} name="close" />
						</Button>
					</Left>
				</Header>
				<Content style={{ backgroundColor: '#FFF' }}>
					<View style={styles.container}>
						<View style={styles.innerContainer}>
							<Text style={styles.titleText}>Markus's Reward Card</Text>
							<Text style={styles.pointsText}>100</Text>
							<QRCode value={this.state.loyaltyCardNumber} size={200} bgColor="#34495e" />
							<Text style={styles.idText}>ID#{this.state.loyaltyCardNumber}</Text>
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
	innerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100
	},
	titleText: {
		fontSize: 22,
		fontWeight: '700',
		textAlign: 'center'
	},
	pointsText: {
		fontSize: 55,
		fontWeight: '100',
		marginTop: 20,
		marginBottom: 20
	},
	idText: {
		marginTop: 20,
		fontSize: 22,
		fontWeight: '400'
	}
});
