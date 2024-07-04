import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { getProductByTitle } from '@/DummyData';
import { SliderBox } from 'react-native-image-slider-box';
import theme from '@/theme';
import FavoriteIcon from '@/components/atoms/FavouriteIcon/FavoriteIcon';
const getImagesArray = (product) => {
  let arr: any = [];
  for (let i = 0; i < 5; i++) {
    arr.push(product.image);
  }
  return arr;
};

const ProductDetailsPage = () => {
  const { productId } = useLocalSearchParams();
  const [product, setProduct] = useState(undefined);
  const [thumbnail, setThumbnail] = useState([]);
  useEffect(() => {
    setProduct(getProductByTitle(productId));
  }, [productId]);

  useEffect(() => {
    if (product) setThumbnail(getImagesArray(product));
  }, [product]);
  return (
    <View>
      <View className='mb-2'>
        <SliderBox
          sliderBoxHeight={300}
          images={thumbnail}
          dotColor={theme.colors.secondary.DEFAULT}
        />
      </View>
      <View className='px-2 flex-row justify-end '>
        <FavoriteIcon />
      </View>
      <Text>{productId}</Text>
    </View>
  );
};

export default ProductDetailsPage;
