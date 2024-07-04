import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { StationaryStoreData } from '@/DummyData';
import CustomButton from '@/components/molecules/CustomButton/CustomButton';

const SubCategoryComponent = ({
  title,
  to = {
    path: 'shop/products',
    params: {
      productId: 'Any',
    },
  },
}) => {
  return (
    <TouchableOpacity
      onPress={() => router.push({ pathname: to.path, params: to.params })}
      className='px-8 py-4 border-b border-gray-300'
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const SubCategoryListHeader = ({ to }) => (
  <View>
    <CustomButton
      containerStyles={
        ' h-12 rounded-full m-4 bg-primary shadow-sm shadow-gray-500'
      }
      textStyles={'text-white text-md font-pregular'}
      title={'VIEW ALL ITEMS'}
      onPress={() => router.push(to)}
    />
    <Text className='text-xs text-light-400 font-pregular px-2 py-1'>
      Choose category
    </Text>
  </View>
);

const SubCategoryScreen = () => {
  const { category } = useLocalSearchParams();
  const filteredList = StationaryStoreData.filter(
    (item) => item.title === category
  );
  return (
    <>
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: category as string,
          title: category as string,
        }}
      />

      <FlatList
        ListHeaderComponent={() => (
          <SubCategoryListHeader
            to={{
              pathname: '/shop/products',
              params: { category },
            }}
          />
        )}
        data={filteredList[0].subcategories}
        renderItem={({ item }) => (
          <SubCategoryComponent
            title={item.title}
            to={{
              path: 'shop/products',
              params: { category, subCategory: item.title },
            }}
          />
        )}
      />
    </>
  );
};

export default SubCategoryScreen;
