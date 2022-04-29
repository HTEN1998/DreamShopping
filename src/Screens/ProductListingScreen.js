import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const shoes = require('./src/Assets/images/shoes.jpg');
const pant = require('./src/Assets/images/genes.jpg');
const flask = require('./src/Assets/images/flask.jpg');
const watch = require('./src/Assets/images/watch.jpg');

const productList = [
  {
    id: 1,
    name: 'Nike Shoes',
    brandName: 'Nike',
    price: '2000',
    imgUrl: shoes,
  },
  {
    id: 2,
    name: 'Termer Flask',
    brandName: 'Temp-Wave',
    price: '1000',
    imgUrl: flask,
  },
  {
    id: 3,
    name: 'Royal Watch',
    brandName: 'Titan',
    price: '1000',
    imgUrl: watch,
  },
  {
    id: 4,
    name: 'Denim Genens',
    brandName: 'Denim',
    price: '1000',
    imgUrl: pant,
  },
];

const ProductListingScreen = () => {
  const renderProductCards = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          margin: 10,
          padding: 10,
          borderWidth: 2,
          borderRadius: 15,
        }}>
        <Image
          source={item.imgUrl}
          style={{height: 200, width: '100%'}}
          resizeMode={'contain'}
        />
        <Text style={{color: '#000', fontSize: 20}}>{item.name}</Text>
        <Text style={{color: '#000', fontSize: 15}}>{item.brandName}</Text>
        <Text style={{color: '#000', fontSize: 25, fontWeight: 'bold'}}>
          {item.price}
        </Text>
      </View>
    );
  };

  const renderOfferCards = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginVertical: 10,
          padding: 10,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000'}}>A new Offer</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'orange', padding: 15}}>
        <Text style={styles.appTitle}>Dream Shopping</Text>
        {renderOfferCards()}
      </View>
      <View style={{flex: 3, backgroundColor: 'white', padding: 15}}>
        <Text style={styles.sectionTittle}>Best Offers</Text>
        <View
          style={{backgroundColor: 'white', justifyContent: 'space-between'}}>
          <FlatList
            data={productList}
            keyExtractor={item => item.id}
            numColumns={2}
            horizontal={false}
            renderItem={renderProductCards}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTittle: {
    color: '#000',
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default ProductListingScreen;
