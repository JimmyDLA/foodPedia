import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TabNavigator, Icon, TouchableOpacity } from 'react-native';

export const Button1 = ({ text, onClick }) => (
  <TouchableOpacity
  onPress={onClick}
	style={ styles.button1 }>
		<ImageBackground
		source={require('../images/background/Rectangle5.png')}
		style={styles.img}>
			<Text style={ styles.txt1 } >
				{text}
			</Text>
		</ImageBackground>
  </TouchableOpacity>
);

export const Button2 = ({ text, onClick }) => (
  <TouchableOpacity
    onPress={onClick}
		style={ styles.button2 }>
			<Text style={ styles.txt2 } >
				{text}
			</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
	button1: {
		height: 80,
		width: 300,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		padding: 10,
		shadowColor: "rgba(0,0,0,0.1)" ,
		shadowOffset: {
			height:4,
			width:0
		},
		shadowOpacity: 1,
		shadowRadius: 1,
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
		color:'#ff8993',
		fontSize: 30
	},
	img: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
		width:300,
	},
});

// buttonS1
// buttonM1
// buttonL1
//
// buttonS2
// buttonM2
// buttonL2
