import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

export default ({ onPress, image, label }) => (
	<TouchableOpacity style={styles.container}>
		<View style={style.wrapper}>
			<Image style={styles.image} source={{ uri: image }} />
			<Text style={styles.labelText}>{{ label }}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {},
	wrapper: {},
	image: {},
	labelText: {}
});
