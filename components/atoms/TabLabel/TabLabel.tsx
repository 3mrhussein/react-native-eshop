import { View, Text } from 'react-native';
import React from 'react';

const TabLabel = ({ focused, color, name }) => {
  return (
    <Text
      className={`${focused ? 'font-pmedium' : 'font-pregular'} text-xs `}
      style={{ color: color }}
    >
      {name}
    </Text>
  );
};

export default TabLabel;
