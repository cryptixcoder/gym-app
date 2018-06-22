import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default (props) => (
	<TouchableOpacity style={styles.container} onPress={props.onPress}>
		<View style={styles.wrapper}>
			{props.icon}
			<Text style={styles.labelText}>{props.label}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		width: WIDTH / 2,
		height: WIDTH / 2,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	labelText: {
		fontSize: 16,
		fontWeight: '700',
		marginTop: 10
	}
});
