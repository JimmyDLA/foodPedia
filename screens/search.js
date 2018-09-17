import React from 'react';
import { StyleSheet, Text, View, TabNavigator, Icon } from 'react-native';


class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>SEARCH PAGE!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(230, 126, 34)',
    alignItems: 'center',
    justifyContent: 'center',
  },
	txt: {
		color: "white"
	}
});


export default Search;
