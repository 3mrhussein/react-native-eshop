import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View } from 'react-native';
import ProductCard from '@/components/organisms/ProductCard/ProductCard';
import { getProductListByCategory } from '@/DummyData';

interface FormType {
  title: string;
  video: ImagePicker.ImagePickerAsset | undefined;
  thumbnail: ImagePicker.ImagePickerAsset | undefined;
  prompt: string;
}

const Favorites = () => {
  const [productList, setProductList] = useState<any[]>([]);
  useEffect(() => {
    setProductList(getProductListByCategory('Markers'));
  }, []);
  return (
    <SafeAreaView edges={{ top: true }}>
      <View className='items-center'>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={productList}
          renderItem={({ item }) => (
            <View className='py-4'>
              <ProductCard
                price={item.price}
                title={item.name}
                imgURL={item.image}
                liked={true}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
