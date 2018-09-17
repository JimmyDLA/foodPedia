import React from 'react';
import { Button1, Button2  } from '../items/button.component';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';


class Home extends React.Component {

	//FUNCTIONS

	onGo = () =>{
		this.props.navigation.navigate("Recipes");
	}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>HOME PAGE!</Text>
				<Button2
					text= "GO!"
					onClick= {() => this.onGo()}
				/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(241, 196, 15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	txt: {
		color: "white"
	}
});


export default Home;
