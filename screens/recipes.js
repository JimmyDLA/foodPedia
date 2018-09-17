import React from 'react';
import { Button1, Button2  } from '../items/button.component';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';


class Recipes extends React.Component {

	//FUNCTIONS

	onFilter = () =>{
		this.props.navigation.navigate('Filter');
	}

	onDetail = () =>{
		this.props.navigation.push('Recipe');
	}

  render() {
    return (
      <View style={styles.container}>
				<Button1
					text="Filters"
					onClick={() => this.onFilter()}
				/>
        <Text style={styles.txt}>RECIPES PAGE!</Text>
				<Button2
					text="Recipe Details"
					onClick={() => this.onDetail()}
				/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(41, 128, 185)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	txt: {
		color: 'white'
	}
});


export default Recipes;
