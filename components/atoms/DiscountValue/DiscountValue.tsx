import { View, Text } from 'react-native';
import React from 'react';

const DiscountValue = ({ price = 15, priceAfterDiscount, currency = '$' }) => {
  return (
    <View className='flex-row justify-center items-center self-start'>
      <Text
        className={`${
          priceAfterDiscount
            ? 'line-through decoration-solid text-xs text-light-400'
            : ' text-base'
        }`}
      >
        {price} {currency}{' '}
      </Text>
      {priceAfterDiscount ? (
        <Text className=' text-red-600 text-base'>
          {priceAfterDiscount}
          {currency}
        </Text>
      ) : null}
    </View>
  );
};

export default DiscountValue;
