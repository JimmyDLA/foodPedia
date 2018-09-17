import React from 'react';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';


class Account extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>ACCOUNT PAGE!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(155, 89, 182)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	txt: {
		color: "white"
	}
});


export default Account;
