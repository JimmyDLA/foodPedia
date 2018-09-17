import React from 'react';
import { Button1, Button2  } from '../items/button.component';
import { StyleSheet, Text, View, TabNavigator, Icon, TouchableOpacity } from 'react-native';


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
				<Button1
					text="Back"
					onClick={() => this.onBack()}
				/>
        <Text style={styles.txt}>SIGNUP PAGE!</Text>
				<Button2
					text="Next"
					onClick={() => this.onLogin()}
				/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(50, 50, 100)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	txt: {
		color: "white"
	}
});


export default Signup;
