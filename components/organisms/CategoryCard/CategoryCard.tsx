import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import { router, useRouter } from 'expo-router';

const CategoryCard = ({
  title = 'New',
  image = images.Hero,
  to = { path: '/shop/category' },
  ...props
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{ elevation: 10 }}
      activeOpacity={0.7}
      {...props}
      className='m-4 h-28 bg-white rounded-lg shadow-sm shadow-gray-300 flex-row'
      onPress={() => {
        router.setParams({ title: to.params.title });
        router.push({ pathname: to.path, params: to.params });
      }}
    >
      <View className=' w-full flex-initial justify-center my-auto h-full'>
        <Text className='text-xl pl-8 font-semibold '>{title}</Text>
      </View>
      <View className=' overflow-hidden flex-initial w-full '>
        <Image
          style={{
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          source={image}
          resizeMode='cover'
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
