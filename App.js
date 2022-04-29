import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Dream Shopping</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  text: {
    color: '#000',
    fontSize: 18,
  }
});

export default App;
