import React from 'react';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';


class Recipe extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>RECIPE PAGE!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 177, 160)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	txt: {
		color: 'white'
	}
});


export default Recipe;
