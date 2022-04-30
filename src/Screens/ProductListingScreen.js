import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import CouponCard from '../Components/Cards/CouponCard';
import ProductCard from '../Components/Cards/ProductCard';

const shoes = require('../Assets/images/shoes.jpg');
const pant = require('../Assets/images/genes.jpg');
const flask = require('../Assets/images/flask.jpg');
const watch = require('../Assets/images/watch.jpg');

const couponList = [
  {
    couponTitle: '20% off upto Rs 100',
    couponCode: 'Use Rupay100 code',
    eligibleAmount: 'for Rs 10,000',
  },
  {
    couponTitle: '50% off upto Rs 700',
    couponCode: 'Use Amazon650 code',
    eligibleAmount: 'for Rs 40,000',
  },
  {
    couponTitle: '30% off upto Rs 8000',
    couponCode: 'Use ZapIt60 code',
    eligibleAmount: 'for Rs 20,000',
  },
];

const productList = [
  {
    id: 1,
    name: 'Nike Shoes',
    brandName: 'Nike',
    price: '2000',
    imgUrl: shoes,
    warentyPeriod: '1 year',
  },
  {
    id: 2,
    name: 'Termer Flask',
    brandName: 'Temp-Wave',
    price: '1000',
    imgUrl: flask,
    warentyPeriod: '2 years',
  },
  {
    id: 3,
    name: 'Royal Watch',
    brandName: 'Titan',
    price: '1000',
    imgUrl: watch,
    warentyPeriod: '10 months',
  },
  {
    id: 4,
    name: 'Denim Genens',
    brandName: 'Denim',
    price: '1000',
    imgUrl: pant,
    warentyPeriod: '1 year',
  },
];

const ProductListingScreen = ({navigation}) => {
  const renderProductCards = ({item}) => {
    return (
      <ProductCard
        data={item}
        onPressCard={() => navigation.navigate('Details', {product: item})}
        productImageStyle={{height: 200}}
        cardContainerStyle={{marginLeft: 10, marginBottom: 10}}
      />
    );
  };

  const renderCouponCards = () => {

    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {couponList.map(coupon => {
          return (
            <CouponCard
              data={coupon}
              cardContainerStyle={{
                marginVertical: 20,
                padding: 16,
                marginRight: 15,
              }}
              descriptionContainerStyle={{paddingTop: 10, borderTopWidth: 1}}
            />
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.couponSection}>
        <Text style={styles.appTitle}>Dream Shopping</Text>
        {renderCouponCards()}
      </View>
      <View style={styles.offerSection}>
        <Text style={styles.sectionTittle}>Best Offers</Text>
        <FlatList
          data={productList}
          keyExtractor={item => item.id}
          numColumns={2}
          horizontal={false}
          renderItem={renderProductCards}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  couponSection: {
    flex: 1,
    backgroundColor: '#ffa500',
    padding: 15,
  },
  offerSection: {
    flex: 3,
    backgroundColor: '#fff',
    padding: 15,
  },
  sectionTittle: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 24,
    paddingVertical: 5,
  },
});

export default ProductListingScreen;
