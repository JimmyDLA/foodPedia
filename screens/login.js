import React from 'react';
import { Button1, Button2 } from '../items/button.component';
import { Image, Button, TextInput, ImageBackground, StyleSheet, Text, View, TabNavigator, Icon, TouchableOpacity } from 'react-native';


class Login extends React.Component {

	//FUNCTIONS

	onLogin = () =>{
		this.props.navigation.navigate('Tabs');
	}

	onSignup = () =>{
		this.props.navigation.navigate('Signup');
	}

  render() {
		// OPTION #1
    // return (
    //   <ImageBackground
		// 		source={require('../images/background/food_background.jpg')}
		// 		style={styles.img}>
		// 		<View style={styles.overlay}>
		// 			<Button1
		// 				text="Login"
		// 				onClick={() => this.onLogin()}
		// 			/>
		// 		</View>
		// 	</ImageBackground>
    // );

		//OPTION #2
		return(
			<View style={styles.container}>

		   <ImageBackground
		 			source={require('../images/background/Rect2.png')}
		 			style={styles.img}>
					<Text style={styles.txt}>
						Log In
					</Text>
				</ImageBackground>

				<View style={styles.bottom}>
					<View style={styles.inputCont}>
						<TextInput
						style={styles.input1}
						placeholder='Email'/>

						<TextInput
						style={styles.input2}
						placeholder='Password'/>

				 		<Button1
				 			text="LOG IN"
				 			onClick={() => this.onLogin()}
				 		/>

					</View>
					<View style={styles.footer}>
						<Text style={styles.bottomTxt}>
							DON'T HAVE AN ACCOUNT?
						</Text>
						<Button
						onPress={() => this.onSignup()}
						style={styles.signup}
						title="SIGN UP!"
						color='#ff8993'
						/>
					</View>
				</View>
			</View>
		);
  }
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: 'rgba(236, 240, 241,0.5)',
		width:"100%"
  },
	img: {
		flex: 1,
    resizeMode: 'cover',
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
	img2: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputCont: {
		top:-30,
		width: "100%",
		height: "85%",
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	input1: {
		padding: 20,
		height: 60,
		width: 300,
		color: "rgb(80,80,80)",
		backgroundColor: "white",
		borderColor: "rgba(0,0,0,0.1)",
		borderWidth: 0,
		fontSize: 20,
		shadowColor: "rgba(0,0,0,0.1)" ,
		shadowOffset: {
			height:5,
			width:0
		},
		shadowOpacity: 1,
		shadowRadius: 2,
	},
	input2: {
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
	button: {
		height: 60,
		width: 300,
		shadowColor: "rgba(0,0,0,0.1)" ,
		shadowOffset: {
			height:4,
			width:0
		},
		shadowOpacity: 1,
		shadowRadius: 1,
	},
	txt: {
		color: 'white',
		fontSize: 40
	},
	txtbut: {
		color: 'white',
		fontSize: 18
	},
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	top: {
		width: "100%",
		height: "50%",
	},
	bottom: {
		width: "100%",
		height: "40%",
	},
	footer: {
		top:-30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomTxt:{
		height: 20,
		fontSize: 15,
		color: "rgb(75,75,75)"
	},
	signup:{
		height:10,
		width: 100,
	},

});


export default Login;
