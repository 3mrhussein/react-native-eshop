import { View, Text } from 'react-native';
import React from 'react';

const TextComponent = ({
  title,
  subtitle,
  titleSize = 'md',
  subtitleSize = 'xs',
}) => {
  return (
    <View className='flex-1'>
      <Text className={`font-psemibold text-${titleSize}`}>{title}</Text>
      {subtitle && (
        <Text className={`text-${subtitleSize} text-light-500`}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default TextComponent;
