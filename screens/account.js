import React from 'react';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';


class Account extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ACCOUNT PAGE!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Account;
