import React from 'react';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';


class Favorites extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>FAVORITES PAGE!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(192, 57, 43)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	txt: {
		color: "white"
	}
});


export default Favorites;
