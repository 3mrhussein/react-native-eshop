import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import ProductImage from '@/components/molecules/ProductImage/ProductImage';
import FavoriteIcon from '@/components/atoms/FavouriteIcon/FavoriteIcon';
import RatingBar from '@/components/molecules/RatingBar/RatingBar';
import DiscountValue from '@/components/atoms/DiscountValue/DiscountValue';
import { router } from 'expo-router';
const ProductCard = ({
  size = 'lg',
  title = 'Evening Dress',
  imgURL = 'https://picsum.photos/300/450?random=21',
  price,
  liked,
}) => {
  const handlePress = () => {
    router.push(`/shop/products/${title}`);
  };

  return (
    <Pressable
      onPress={handlePress}
      className={` mt-1 mx-4 self-start gap-b-3 ${
        size === 'md' ? 'w-40' : size === 'sm' ? 'w-36' : 'w-44'
      }`}
    >
      <View className='mb-2'>
        <ProductImage source={{ uri: imgURL }} width={'100%'} />
        <FavoriteIcon
          IconSize={size === 'md' ? 16 : size === 'sm' ? 14 : 20}
          style={{
            position: 'absolute',
            bottom: size === 'md' ? -16 : size === 'sm' ? -14 : -20,
            right: 0,
          }}
          active={liked}
        />
      </View>
      <View className='relative'>
        <RatingBar size={size} />
        <Text className=' text-[10px] text-light-300 font-pregular'>
          Ay Haga
        </Text>
        <Text numberOfLines={1} className='font-medium'>
          {title}
        </Text>
        <DiscountValue currency='$' price={price} />
      </View>
    </Pressable>
  );
};

export default ProductCard;
