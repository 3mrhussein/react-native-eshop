import { View, Text, Image } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import CustomButton from './molecules/CustomButton/CustomButton';
import { router } from 'expo-router';

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className='flex-1 justify-center items-center px-4'>
      <Image
        source={images.empty}
        className='w-[270px] h-[215px]'
        resizeMode='contain'
      />
      <Text className='font-psemibold mt-2 text-xl text-center '>{title}</Text>
      <Text className='font-plight text-xs text-light-400'>{subtitle}</Text>
      {/* <CustomButton
        title='Create Video'
        handlePress={() => router.push('/create')}
        containerStyles={'w-full my-5 p-2'}
      /> */}
    </View>
  );
};

export default EmptyState;
