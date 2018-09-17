import React from 'react';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';


class Filter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Filter PAGE!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(129, 236, 236)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	txt: {
		color: "white"
	}
});


export default Filter;
