import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import { AntDesign } from '@expo/vector-icons';
import theme from '@/theme';

const CartItem = ({
  image = images.Hero,
  quantity = 10,
  price = 15,
  title = '',
  onIcrease,
  onDecrease,
}) => {
  return (
    <View
      style={{ elevation: 20 }}
      className=' my-2 shadow-sm rounded-md bg-white h-28 flex-row '
    >
      <Image
        resizeMode='cover'
        className=' rounded-l-md w-[28%] h-full'
        source={{ uri: image }}
      />
      <View className='p-3 flex-1 justify-between'>
        <Text numberOfLines={1} className=' font-psemibold'>
          {title}
        </Text>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row justify-between items-center gap-1'>
            <TouchableOpacity
              onPress={onDecrease}
              activeOpacity={0.7}
              className='bg-white shadow-sm rounded-full p-2'
            >
              <AntDesign
                name='minus'
                size={20}
                color={theme.colors.light[400]}
              />
            </TouchableOpacity>
            <Text className='w-10 text-center'>{quantity}</Text>
            <TouchableOpacity
              onPress={onIcrease}
              activeOpacity={0.7}
              className='bg-white shadow-sm rounded-full p-2'
            >
              <AntDesign
                name='plus'
                size={20}
                color={theme.colors.light[400]}
              />
            </TouchableOpacity>
          </View>
          <Text className='font-psemibold '>
            {(quantity * price).toFixed(2)}$
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
