import React from 'react';
import { Button1, Button2 } from '../items/button.component';
import { Image, ImageBackground, StyleSheet, Text, View, TabNavigator, Icon, TouchableOpacity } from 'react-native';


class Login extends React.Component {

	//FUNCTIONS

	onLogin = () =>{
		this.props.navigation.navigate('Tabs');
	}

	onSignup = () =>{
		this.props.navigation.navigate('Signup');
	}

  render() {
    return (
      <ImageBackground
				source={require('../images/background/food_background.jpg')}
				style={styles.img}>
				<View style={styles.overlay}>
				<Button1
					text="Login"
					onClick={() => this.onLogin()}
				/>
				</View>
			</ImageBackground>
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
});


export default Login;
