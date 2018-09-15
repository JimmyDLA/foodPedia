import React from 'react';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';

// import Coupons from './screens/coupons';
// import Login from './screens/login';
// import NativeAPI from './screens/nativeApi';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LOGIN PAGE!</Text>
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


export default Login;
