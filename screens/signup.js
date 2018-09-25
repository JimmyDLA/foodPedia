import React from 'react';
import { Button1, Button2  } from '../items/button.component';
import { Input1 } from '../items/input.component';
import { ImageBackground, StyleSheet, Text, View, TabNavigator, Icon, TouchableOpacity } from 'react-native';


class Signup extends React.Component {

	//FUNCTIONS

	onLogin = () =>{
		this.props.navigation.navigate('Tabs');
	}

	onBack = () =>{
		this.props.navigation.goBack();
	}

  render() {
    return (
      <View style={styles.container}>

				<ImageBackground
				style={styles.top}
				source={require('../images/background/Rect3.png')}>
					<Text style={styles.txt}>
						Sign Up
					</Text>
				</ImageBackground>

				<View style={styles.bottom}>
					<View style={styles.inputCont}>
						<Input1
						placeholder = "Email"/>
						<Input1
						placeholder = "Password"/>
						<Input1
						placeholder = "Confirm Password"/>
					</View>
					<Button1
					text="SIGN UP"
					/>
				</View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
    alignItems: 'center',
  },
	top: {
		width: "100%",
		height: "50%",
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: "rgba(120,120,120,0.5)" ,
		shadowOffset: {
			height:5,
			width:0
		},
		shadowOpacity: 1,
		shadowRadius: 5,
	},
	txt: {
		color: "white",
		fontSize: 40
	},
	bottom: {
		// width: "100%",

	},
	inputCont: {
		top: -30,
		height: "50%",
		width: "100%",
		justifyContent: 'space-between'
	}
});


export default Signup;
