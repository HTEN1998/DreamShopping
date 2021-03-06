import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Screens/SplashScreen';
import ProductListingScreen from './src/Screens/ProductListingScreen';
import ProductDetailsScreen from './src/Screens/ProductDetailsScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={ProductListingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={ProductDetailsScreen}
          options={{headerTitle: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
