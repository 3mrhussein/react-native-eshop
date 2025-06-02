import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import theme from '@/theme';

const LinkListItem = ({
  title = 'header',
  subtitle = 'subtitle',
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      className='px-4 items-center justify-center w-full flex-row'
    >
      <View className='flex-1'>
        <Text className='font-psemibold'>{title}</Text>
        <Text className='text-xs text-light-400'>{subtitle}</Text>
      </View>
      <AntDesign name='right' size={16} color={theme.colors.light[500]} />
    </TouchableOpacity>
  );
};

export default LinkListItem;
