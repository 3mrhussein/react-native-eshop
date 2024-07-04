import { View, Text } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Star = ({ type = 'full', size = 20, ...props }) => {
  return (
    <FontAwesome
      {...props}
      name={`${
        type === 'full' ? 'star' : type === 'half' ? 'star-half-o' : 'star-o'
      }`}
      size={size}
      color={type === 'full' || type === 'half' ? '#FFBA4A' : '#c1c1c1'}
    />
  );
};

export default Star;
