import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import { styled } from 'nativewind';
import Badge from '@/components/atoms/Badge/Badge';
import { ProductImageProps } from './ProductImage.types';
const ProductImage: React.FC<ProductImageProps> = ({
  BadgeText = '10%',
  source = images.cards,
  width = 170,
  ...styles
}) => {
  return (
    <View
      style={{
        width,
        aspectRatio: 180 / 260,
        ...styles,
      }}
      className='bg-light shadow-sm shadow-gray-400  rounded-lg  self-start'
    >
      <ImageBackground
        resizeMode='cover'
        className='w-full h-full rounded-lg overflow-hidden'
        source={source}
        onError={(error) => console.log(error)}
      >
        <Badge text={BadgeText} style={{ top: 10, left: 10 }} />
      </ImageBackground>
    </View>
  );
};

export default ProductImage;
