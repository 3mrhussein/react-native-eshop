import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CartItem from '@/components/organisms/CartItem/CartItem';
import { useCartContext } from '@/context/Cart/CartProvider';
import CustomButton from '@/components/molecules/CustomButton/CustomButton';
import EmptyState from '@/components/EmptyState';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cart = () => {
  const { addToCart, cartItems, totalPrice } = useCartContext();
  return (
    <>
      <SafeAreaView edges={['top', 'left', 'right']} />
      <View className=' pb-4 px-4 flex-1'>
        <Text className='p-4 text-3xl font-pbold'>My Cart</Text>

        {cartItems.length !== 0 ? (
          <FlatList
            data={cartItems}
            renderItem={(item) => (
              <CartItem
                title={item.item.name}
                quantity={item.item.qty}
                price={item.item.price}
                image={item.item.image}
                onIcrease={() => addToCart(item.item)}
              />
            )}
          />
        ) : (
          <EmptyState title='No Items' subtitle='Your cart is empty' />
        )}
        <View className='flex-row justify-between items-center my-4'>
          <Text className='font-pregular text-xs text-light-400'>
            Total amount:
          </Text>
          <Text className='text-lg font-psemibold'>
            {totalPrice.toFixed(2)} $
          </Text>
        </View>
        <CustomButton
          disabled={cartItems.length === 0 ? true : false}
          title={'CHECK OUT'}
          containerStyles={`p-3 rounded-full ${
            cartItems.length === 0 ? 'bg-gray-300' : ''
          }`}
          textStyles={'font-plight text-sm'}
        />
      </View>
    </>
  );
};

export default Cart;
