import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ProductCard = props => {
  const {data, onPressCard, productImageStyle, cardContainerStyle} = props;

  return (
    <TouchableOpacity
      style={[styles.card, cardContainerStyle]}
      onPress={onPressCard}>
      <Image
        source={{uri: data.imgUrl}}
        style={[styles.productImage, productImageStyle]}
        resizeMode={'contain'}
      />
      <Text style={styles.productNameText}>{data.name}</Text>
      <Text style={styles.brandNameText}>{data.brandName}</Text>
      <Text style={styles.priceLabelText}>
        Rs <Text style={styles.priceText}>{data.price}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 15,
  },
  productImage: {
    height: 100,
    width: '100%',
  },
  productNameText: {
    color: '#555',
    fontSize: 20,
  },
  brandNameText: {
    color: '#555',
    fontSize: 14,
  },
  priceLabelText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceText: {
    color: '#339af0',
    fontSize: 24,
  },
});
export default ProductCard;
