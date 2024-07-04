import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { getProductList, getProductListByCategory } from '@/DummyData';
import ProductCard from '@/components/organisms/ProductCard/ProductCard';

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

const ProductsPage = () => {
  const { category, subCategory } = useLocalSearchParams();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    if (!subCategory) setProductList(getProductListByCategory(category));
    else if (category && subCategory)
      setProductList(getProductList(category, subCategory));
  }, [category, subCategory]);
  return (
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
            />
          </View>
        )}
      />
    </View>
  );
};

export default ProductsPage;
