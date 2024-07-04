import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

const ShopLayout = () => {
  return (
    <>
      <SafeAreaView
        className='flex-1'
        edges={{ left: 'additive', right: 'additive' }}
        mode='padding'
      >
        <Stack>
          <Stack.Screen name='index' options={{ title: 'Shop' }} />

          <Stack.Screen name='categories/hello' />
          <Stack.Screen name='products/index' options={{ title: 'products' }} />
          <Stack.Screen
            name='products/[productId]'
            options={{ title: 'ProductID' }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
};

export default ShopLayout;
