import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as THEME from '../styles/theme';
import moment from 'moment';

export default (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.dayHeader}>
				<View>
					<Text style={styles.dayText}>{moment(props.day.date).format('dddd')}</Text>
				</View>
				<View>
					<Text style={styles.dateText}>{moment(props.day.date).format('MMMM D, YYYY')}</Text>
				</View>
			</View>
			<View>{props.children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	dayHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		marginBottom: 10
	},
	dayText: {
		fontSize: THEME.FONTS.subheading.size,
		fontWeight: THEME.FONTS.subheading.weight,
		marginLeft: 10
	},
	dateText: {
		fontSize: THEME.FONTS.subheading.size,
		fontWeight: THEME.FONTS.subheading.weight,
		marginRight: 10
	}
});
