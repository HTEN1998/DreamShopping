import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CouponCard = props => {
  const {data, cardContainerStyle, descriptionContainerStyle} = props;
  return (
    <View style={[styles.card, cardContainerStyle]}>
      <Text style={styles.cardTitleText}>{data.couponTitle}</Text>
      <View style={[styles.couponDescription, descriptionContainerStyle]}>
        <Text style={styles.couponCodeText}>{data.couponCode}</Text>
        <Text style={styles.couponAmountText}>{data.eligibleAmount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 350,
    borderRadius: 15,
  },
  cardTitleText: {
    color: '#333',
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  couponDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  couponCodeText: {
    color: '#555',
    fontSize: 12,
    marginRight: 10,
  },
  couponAmountText: {
    color: '#555',
    fontSize: 12,
  },
});

export default CouponCard;
