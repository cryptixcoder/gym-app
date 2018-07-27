import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { View, StyleSheet, Text } from 'react-native';

import DayList from '../components/daylist';
import ClassLink from '../components/classlink';

const classes = [
	{
		id: 1,
		date: '6/20/18',
		classes: [
			{
				id: 100,
				name: 'Class 1',
				instructor: 'Instructor 1',
				description: 'This is the class description.',
				date: '6/20/18',
				starttime: '12:00 PM',
				endtime: '1:00 PM',
				location: 'Studio A'
			},
			{
				id: 101,
				name: 'Class 2',
				instructor: 'Instructor 2',
				description: 'This is the class description.',
				date: '6/20/18',
				starttime: '1:30 PM',
				endtime: '2:30 PM',
				location: 'Studio A'
			},
			{
				id: 102,
				name: 'Class 3',
				instructor: 'Instructor 3',
				description: 'This is the class description.',
				date: '6/20/18',
				starttime: '2:45 PM',
				endtime: '3:45 PM',
				location: 'Studio A'
			}
		]
	},
	{
		id: 2,
		date: '6/21/18',
		classes: [
			{
				id: 103,
				name: 'Class 4',
				instructor: 'Instructor 1',
				description: 'This is the class description.',
				date: '6/21/18',
				starttime: '12:00 PM',
				endtime: '1:00 PM',
				location: 'Studio A'
			},
			{
				id: 104,
				name: 'Class 5',
				instructor: 'Instructor 2',
				description: 'This is the class description.',
				date: '6/21/18',
				starttime: '1:30 PM',
				endtime: '2:30 PM',
				location: 'Studio A'
			},
			{
				id: 105,
				name: 'Class 6',
				instructor: 'Instructor 3',
				description: 'This is the class description.',
				date: '6/21/18',
				starttime: '2:45 PM',
				endtime: '3:45 PM',
				location: 'Studio A'
			}
		]
	},
	{
		id: 3,
		date: '6/22/18',
		classes: [
			{
				id: 106,
				name: 'Class 7',
				instructor: 'Instructor 1',
				description: 'This is the class description.',
				date: '6/22/18',
				starttime: '12:00 PM',
				endtime: '1:00 PM',
				location: 'Studio A'
			},
			{
				id: 107,
				name: 'Class 8',
				instructor: 'Instructor 2',
				description: 'This is the class description.',
				date: '6/22/18',
				starttime: '1:30 PM',
				endtime: '2:30 PM',
				location: 'Studio A'
			},
			{
				id: 108,
				name: 'Class 9',
				instructor: 'Instructor 3',
				description: 'This is the class description.',
				date: '6/22/18',
				starttime: '2:45 PM',
				endtime: '3:45 PM',
				location: 'Studio A'
			}
		]
	}
];

export default class Classes extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Upcoming Classes',
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
					{classes.map((record) => {
						return (
							<DayList day={record} key={record.id}>
								{record.classes.map((cl) => {
									return (
										<ClassLink
											class={cl}
											key={cl.id}
											onPress={() => {
												this.props.navigation.navigate('Class', { class: cl });
											}}
										/>
									);
								})}
							</DayList>
						);
					})}
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
