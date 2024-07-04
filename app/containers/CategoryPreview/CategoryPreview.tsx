import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const CategoryPreview = ({
  title = 'Sale',
  subtitle = 'Super summer sale',
  children,
  to = '',
}) => {
  return (
    <View className='mt-8'>
      <View className='mx-4'>
        <Pressable
          onPress={() => router.push(to)}
          className='flex-row justify-between'
        >
          <Text className=' text-2xl font-pbold'>{title}</Text>
          <Text className=' text-xs self-end font-pregular '>View all</Text>
        </Pressable>
        <Text className='mb-5 text-xs font-light text-gray-400'>
          {subtitle}{' '}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default CategoryPreview;
