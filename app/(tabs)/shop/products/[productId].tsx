import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { getProductByTitle } from '@/DummyData';
import { SliderBox } from 'react-native-image-slider-box';
import theme from '@/theme';
import FavoriteIcon from '@/components/atoms/FavouriteIcon/FavoriteIcon';
import RatingBar from '@/components/molecules/RatingBar/RatingBar';
import CustomButton from '@/components/molecules/CustomButton/CustomButton';
import { AntDesign } from '@expo/vector-icons';
import CategoryPreview from '@/app/containers/CategoryPreview/CategoryPreview';
import ProductCard from '@/components/organisms/ProductCard/ProductCard';
import { useCartContext } from '@/context/Cart/CartProvider';
const fakeCardsArray = ['', '', '', '', ''];

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
  const { addToCart } = useCartContext();

  useEffect(() => {
    setProduct(getProductByTitle(productId));
  }, [productId]);

  useEffect(() => {
    if (product) setThumbnail(getImagesArray(product));
  }, [product]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: product?.name as string,
          title: product?.name as string,
        }}
      />
      <View className='mb-2'>
        <SliderBox
          sliderBoxHeight={400}
          images={thumbnail}
          dotColor={theme.colors.secondary.DEFAULT}
          resizeMode={'contain'}
          // ImageComponentStyle={{ backgroundColor: theme.colors.light.DEFAULT }}
          activeOpacity={1}
        />
      </View>
      <View className='px-4'>
        <View className='flex-row justify-end mb-5'>
          <FavoriteIcon IconSize={16} />
        </View>
        <View className=' flex-row justify-between min-w-full'>
          <Text className=' max-w-[75%] font-psemibold text-2xl'>
            {product?.name}
          </Text>
          <Text className='text-right font-psemibold text-2xl'>{`$${
            product?.price ?? ''
          }`}</Text>
        </View>
        <Text className='mt-[-2] mb-1 text-xs text-light-400 font-plight '>
          Short black Note
        </Text>
        <View className='mb-4'>
          <RatingBar />
        </View>
        <Text className='text-xs'>{productId}</Text>
        <CustomButton
          title={'ADD TO  CART'}
          containerStyles={'my-4 rounded-full bg-primary py-3'}
          textStyles={'text-xs font-pregular text-light text-white'}
          onPress={() => addToCart(product)}
        />
      </View>
      <TouchableOpacity className=' flex-row justify-between py-3 px-4 border-y border-light-100'>
        <Text>Shipping info</Text>
        <AntDesign name='right' size={16} color={'black'}></AntDesign>
      </TouchableOpacity>
      <TouchableOpacity className=' flex-row justify-between py-3 px-4 border-y border-light-100'>
        <Text>Support</Text>
        <AntDesign name='right' size={16} color={'black'}></AntDesign>
      </TouchableOpacity>
      <CategoryPreview title='You can also like this' subtitle=''>
        <FlatList
          horizontal
          data={fakeCardsArray}
          renderItem={() => <ProductCard size='sm' />}
          showsHorizontalScrollIndicator={false}
        />
      </CategoryPreview>
    </ScrollView>
  );
};

export default ProductDetailsPage;
