import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default (props) => {
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<View style={styles.timeContainer}>
				<Text style={styles.timeText}>{props.class.starttime}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.classText}>{props.class.name}</Text>
				<Text style={styles.instructorText}>{props.class.instructor}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#FFF',
		padding: 10
	},
	timeContainer: {
		flex: 1
	},
	timeText: {
		fontSize: 12,
		fontWeight: '400'
	},
	infoContainer: {
		flex: 3
	},
	classText: {},
	instructorText: {}
});
