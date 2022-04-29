import React from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native';

const shoes = require('../Assets/images/shoes.jpg');
const pant = require('../Assets/images/genes.jpg');
const flask = require('../Assets/images/flask.jpg');
const watch = require('../Assets/images/watch.jpg');

const productList = [
  {
    id: 1,
    name: 'Nike Shoes',
    brandName: 'Nike',
    price: '2000',
    imgUrl: shoes,
    warentyPeriod: "1 year"
  },
  {
    id: 2,
    name: 'Termer Flask',
    brandName: 'Temp-Wave',
    price: '1000',
    imgUrl: flask,
    warentyPeriod: "2 years"
  },
  {
    id: 3,
    name: 'Royal Watch',
    brandName: 'Titan',
    price: '1000',
    imgUrl: watch,
    warentyPeriod: "10 months"
  },
  {
    id: 4,
    name: 'Denim Genens',
    brandName: 'Denim',
    price: '1000',
    imgUrl: pant,
    warentyPeriod: "1 year"
  },
];

const ProductListingScreen = ({ navigation }) => {
  const renderProductCards = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginLeft: 10,
          marginBottom: 10,
          padding: 10,
          borderWidth: 2,
          borderColor: '#555',
          borderRadius: 15,
        }}
        onPress={() => navigation.navigate('Details',{ product: item })}
        >
        <Image
          source={item.imgUrl}
          style={{height: 200, width: '100%'}}
          resizeMode={'contain'}
        />
        <Text style={{color: '#555', fontSize: 20}}>{item.name}</Text>
        <Text style={{color: '#555', fontSize: 14}}>{item.brandName}</Text>
        <Text style={{color: '#555', fontSize: 20, fontWeight: 'bold'}}>
          Rs <Text style={{color: '#339af0', fontSize: 24}}>{item.price}</Text>
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCouponCards = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginVertical: 20,
          padding: 16,
          borderRadius: 15,
          justifyContent: 'center',
          width:350
        }}
        >
        <Text style={{color: '#000', fontSize: 18, paddingBottom:10 ,textAlign:"center"}}>20% off upto Rs 100</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop:10, borderTopWidth: 1 }}>
            <Text style={{color: '#000', fontSize: 12, marginRight: 10}}>Use Rupay100 code</Text>
            <Text style={{color: '#000', fontSize: 12}}>for Rs 10,000</Text>
          </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginVertical: 20,
          padding: 16,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'stretch',marginLeft: 10,
        }}
        >
        <Text style={{color: '#000', fontSize: 18, paddingBottom:10 ,textAlign:"center"}}>20% off upto Rs 100</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop:10, borderTopWidth: 1 }}>
            <Text style={{color: '#000', fontSize: 12, marginRight: 10}}>Use Rupay100 code</Text>
            <Text style={{color: '#000', fontSize: 12}}>for Rs 10,000</Text>
          </View>
      </View>
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
