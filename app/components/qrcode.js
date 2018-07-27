import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal } from 'expo';
import QR from 'react-native-qrcode';

export default class QRCode extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loyaltyCardNumber: '0000000000000000',
			visible: false
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<Text style={styles.titleTExt}>Markus's Reward Card</Text>
					<Text style={styles.idText}>{this.state.loyaltyCardNumber}</Text>
					<QRCode value={this.state.loyaltyCardNumber} size={200} bgColor="purple" fgColor="white" />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	innerContainer: {},
	titleText: {},
	idText: {}
});
