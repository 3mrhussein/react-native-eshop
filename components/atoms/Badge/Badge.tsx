import { View, Text } from 'react-native';
import React from 'react';

const Badge = ({
  backgroundColor = '#DB3021',
  text = '-20%',
  width = 45,
  style,
}) => {
  return (
    <View className='rounded-full' style={{ backgroundColor, width, ...style }}>
      <Text className={` text-white p-1 font-psemibold text-xs text-center`}>
        {text}
      </Text>
    </View>
  );
};

export default Badge;
