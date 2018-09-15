import React from 'react';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';

// import Coupons from './screens/coupons';
// import Login from './screens/login';
// import NativeAPI from './screens/nativeApi';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SEARCH PAGE!</Text>
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


export default Search;
