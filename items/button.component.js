import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, TabNavigator, Icon, TouchableOpacity } from 'react-native';

export const Button1 = ({ text, onClick }) => (
	<LinearGradient colors={['#fec180', '#ff8993']} style={styles.linearGradient}>
  <TouchableOpacity
    onPress={onClick}
		style={ styles.button1 }>
			<Text style={ styles.txt1 } >
				{text}
			</Text>
  </TouchableOpacity>
	</LinearGradient>
);

export const Button2 = ({ text, onClick }) => (
	// <LinearGradient colors={['#fec180', '#ff8993']} style={styles.linearGradient}>
  <TouchableOpacity
    onPress={onClick}
		style={ styles.button2 }>
			<Text style={ styles.txt2 } >
				{text}
			</Text>
  </TouchableOpacity>
	// </LinearGradient>
);

const styles = StyleSheet.create({
	button1: {
		// backgroundColor: "rgb(46, 204, 113)",
		height: 60,
		width: 250,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		padding: 10
	},
	button2: {
		backgroundColor: "rgb(250,250,250)",
		height: 60,
		width: 250,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		padding: 10
	},
	txt1: {
		color:'white',
		fontSize: 30
	},
	txt2: {
		color:'#fec180',
		fontSize: 30
	},
	linearGradient: {
		borderRadius:12
	}
});

// buttonS1
// buttonM1
// buttonL1
//
// buttonS2
// buttonM2
// buttonL2
