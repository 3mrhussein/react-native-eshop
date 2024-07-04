import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import DarkOpacityView from '@/components/atoms/DarkOpacityView/DarkOpacityView';

const HeroBanner = ({ backgroundImage, isRTL, title, height }) => {
  return (
    <ImageBackground
      resizeMode='cover'
      source={backgroundImage}
      className={`w-full h-full `}
      style={{ height }}
    >
      <DarkOpacityView opacity={0.2} />
      <View className={`flex-1 p-5 ${isRTL && 'items-end'} justify-end Z-10`}>
        <Text className=' text-3xl font-pbold text-light'>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default HeroBanner;
