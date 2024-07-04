import { FlatList, ScrollView } from 'react-native';
import React from 'react';
import CustomButton from '@/components/molecules/CustomButton/CustomButton';
import { router } from 'expo-router';
import { StationaryStoreData } from '../../../DummyData';
import CategoryCard from '@/components/organisms/CategoryCard/CategoryCard';
const Shop = () => {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <CustomButton
            containerStyles={
              ' h-12 rounded-full m-4 bg-primary shadow-sm shadow-gray-500'
            }
            textStyles={'text-white text-md font-pregular'}
            title={'VIEW ALL ITEMS'}
            onPress={() => router.push('/shop/categories/all')}
          />
        }
        data={StationaryStoreData}
        renderItem={({ item }) => (
          <CategoryCard
            to={{
              path: `/shop/categories/${item.title}`,
              params: {
                category: item.title,
              },
            }}
            key={item.title}
            title={item.title}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </>
  );
};

export default Shop;
