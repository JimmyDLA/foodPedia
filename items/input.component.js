import React from 'react';
import {ImageBackground, TextInput, StyleSheet, Text, View, TabNavigator, Icon, TouchableOpacity } from 'react-native';

export const Input1 = ({ placeholder }) => (
  <TextInput
	style={ styles.input1 }
	placeholder={placeholder}/>
);

const styles = StyleSheet.create({
	input1: {
		padding: 20,
		height: 60,
		width: 300,
		backgroundColor: "white",
		borderColor: "rgba(0,0,0,0.1)",
		borderWidth: 0,
		fontSize: 20,
		shadowColor: "rgba(0,0,0,0.2)" ,
		shadowOffset: {
			height:4,
			width:0
		},
		shadowOpacity: 1,
		shadowRadius: 10,
	},
});

// buttonS1
// buttonM1
// buttonL1
//
// buttonS2
// buttonM2
// buttonL2
