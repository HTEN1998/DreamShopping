import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const shoes = require('../Assets/images/shoes.jpg');

const ProductDetailsScreen = ({route, navigation}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.centerAlignedContainer}>
        <Image
          source={product.imgUrl}
          style={styles.productImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.productTittle}>{product.name}</Text>
        <View style={styles.productDetails}>
          <Text style={styles.productDetailsText}>Brand Name</Text>
          <Text style={styles.productDetailsText}>{product.brandName}</Text>
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productDetailsText}>Product Warrenty</Text>
          <Text style={styles.productDetailsText}>{product.warentyPeriod}</Text>
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productDetailsText}>Price</Text>
          <Text style={styles.productDetailsText}>Rs {product.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.primaryButtonText}>Buy Now</Text>
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
  centerAlignedContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    height: 300,
    width: '100%',
  },
  productTittle: {
    color: '#555',
    fontSize: 30,
    padding: 15,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginHorizontal: 16,
  },
  productDetailsText: {
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#339af0',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default ProductDetailsScreen;
