import React from 'react';
import { View, Text, TouchableOpacity,Pressable } from 'react-native';
import styles from './Button.Styles';


const Component = ({ title, onPress,style,titleStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.container,style]}>
      <Text style={[styles.text,titleStyle]}>{title}</Text>
    </TouchableOpacity>);
};

export default Component;
