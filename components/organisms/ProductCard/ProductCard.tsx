import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import ProductImage from '@/components/molecules/ProductImage/ProductImage';
import FavoriteIcon from '@/components/atoms/FavouriteIcon/FavoriteIcon';
import RatingBar from '@/components/molecules/RatingBar/RatingBar';
import DiscountValue from '@/components/atoms/DiscountValue/DiscountValue';
import { router } from 'expo-router';

const ProductCard = ({ title = 'Evening Dress', imgURL, price }) => {
  const handlePress = () => {
    router.push(`/shop/products/${title}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className=' mx-4 self-start gap-b-3 w-44'
    >
      <View className='mb-2'>
        <ProductImage source={{ uri: imgURL }} width={'100%'} />
        <FavoriteIcon
          IconSize={20}
          style={{ position: 'absolute', bottom: -20, right: 0 }}
        />
      </View>
      <View className='relative'>
        <RatingBar />
        <Text className=' text-[10px] text-light-300 font-pregular'>
          Ay Haga
        </Text>
        <Text numberOfLines={1} className='font-medium'>
          {title}
        </Text>
        <DiscountValue currency='$' price={price} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
