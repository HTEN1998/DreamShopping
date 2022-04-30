import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const PrimaryButton = props => {
  const {title, containerStyle, onButtonPress} = props;
  return (
    <TouchableOpacity
      style={[styles.primaryButton, containerStyle]}
      onPress={onButtonPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default PrimaryButton;
