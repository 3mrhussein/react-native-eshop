import { View, Text } from 'react-native';
import React from 'react';

const DarkOpacityView = ({ opacity = 1 }) => {
  return (
    <View
      style={{ opacity: opacity }}
      className={`absolute h-full w-full bg-black`}
    />
  );
};

export default DarkOpacityView;
