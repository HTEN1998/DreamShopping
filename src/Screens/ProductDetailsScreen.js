import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const shoes = require('./src/Assets/images/shoes.jpg');

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={shoes}
          style={{height: 300, width: '100%'}}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={{color: '#000', fontSize: 25, padding: 15}}>
          Nike Shoes
        </Text>
        <View
          style={{
            backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: '#000'}}>Brand Name</Text>
          <Text style={{color: '#000'}}>Nike</Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: '#000'}}>Product Warrenty</Text>
          <Text style={{color: '#000'}}>1 year</Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: '#000'}}>Price</Text>
          <Text style={{color: '#000'}}>Rs 2000</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
        }}>
        <Text>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default ProductDetailsScreen;
