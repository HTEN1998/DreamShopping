import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => navigation.navigate("Dashboard"), 2000);
    },[])
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>DreamShopping</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa500',
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;