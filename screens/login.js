import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Button1, Button2 } from '../items/button.component';
import { Image, TextInput, ImageBackground, StyleSheet, Text, View, TabNavigator, Icon, TouchableOpacity } from 'react-native';


class Login extends React.Component {

	//FUNCTIONS

	onLogin = () =>{
		this.props.navigation.navigate('Tabs');
	}

	onSignup = () =>{
		this.props.navigation.navigate('Signup');
	}

  render() {
		//OPTION #1
    // return (
    //   <ImageBackground
		// 		source={require('../images/background/food_background.jpg')}
		// 		style={styles.img}>
		// 		<View style={styles.overlay}>
		// 		<Button1
		// 			text="Login"
		// 			onClick={() => this.onLogin()}
		// 		/>
		// 		</View>
		// 	</ImageBackground>
    // );
		//
		//OPTION #2
		return(
			<View style={styles.container}>
				<LinearGradient colors={['#fec180', '#ff8993']} style={styles.linearGradient}>
					<View style={styles.top}>
						<Text>
						</Text>
					</View>
				</LinearGradient>
				<View style={styles.shadow}/>


				<View style={styles.bottom}>
					<TextInput>

					</TextInput>
				</View>
			</View>
		);
  }
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(236, 240, 241,0.5)',
		// backgroundImage: 'url(../images/background/food_background.jpg)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	img: {
		flex: 1,
    resizeMode: 'cover',
		// tintColor: 'rgba(0,0,250,0)'
	},
	container: {
		flex: 1,
		backgroundColor: 'white',
		// alignItems: 'center',
		justifyContent: 'center',
	},
	linearGradient: {
	},
	top: {
		width: "100%",
		height: "50%",
	},
	shadow: {
		backgroundColor: '#ff8993',
		width: "100%",
		height: 2,
		shadowColor: "black" ,
		shadowOffset: {
			height:5,
			width:0
		},
		shadowOpacity: 1,
		shadowRadius: 5,
	},
	bottom: {
		width: "100%",
		height: "50%",
	}
});


export default Login;
