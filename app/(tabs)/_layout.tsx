import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import theme from '@/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabLabel from '@/components/atoms/TabLabel/TabLabel';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
const addedSizeOnActive = 3;

const TabsLayout = () => {
  return (
    <>
      <SafeAreaView
        className='flex-1'
        edges={{ left: 'additive', right: 'additive' }}
        mode='padding'
      >
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: theme.colors.primary.DEFAULT,
            tabBarInactiveTintColor: theme.colors.light[200],
            tabBarStyle: {
              backgroundColor: theme.colors.light.DEFAULT,
              borderTopWidth: 1,
              borderTopColor: theme.colors.light[200],
              shadowColor: theme.colors.light[200],
              shadowRadius: 3,
              shadowOffset: {
                width: -5,
                height: -5,
              },
              height: 60,
              paddingBottom: 0,
            },
          }}
        >
          <Tabs.Screen
            name='home'
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => {
                return (
                  <AntDesign
                    name='home'
                    size={focused ? size + addedSizeOnActive : size}
                    color={color}
                  />
                );
              },
              tabBarLabel: ({ color, focused }) => (
                <TabLabel color={color} focused={focused} name={'Home'} />
              ),
            }}
          />
          <Tabs.Screen
            name='shop'
            options={{
              title: 'Shop',
              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => (
                <FontAwesome
                  name='th-list'
                  size={focused ? size + addedSizeOnActive : size}
                  color={color}
                />
              ),
              tabBarLabel: ({ color, focused }) => (
                <TabLabel color={color} focused={focused} name={'Categories'} />
              ),
            }}
          />
          <Tabs.Screen
            name='cart'
            options={{
              title: 'Cart',
              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => (
                <AntDesign
                  name='shoppingcart'
                  size={focused ? size + addedSizeOnActive : size}
                  color={color}
                />
              ),
              tabBarLabel: ({ color, focused }) => (
                <TabLabel color={color} focused={focused} name={'Cart'} />
              ),
            }}
          />
          <Tabs.Screen
            name='favorites'
            options={{
              title: 'Favorites',
              headerShown: false,
              tabBarIcon: ({ color, size, focused }) => (
                <AntDesign
                  name={focused ? 'heart' : 'hearto'}
                  size={focused ? size + addedSizeOnActive : size}
                  color={color}
                />
              ),
              tabBarLabel: ({ color, focused }) => (
                <TabLabel color={color} focused={focused} name={'Favorites'} />
              ),
            }}
          />
          <Tabs.Screen
            name='profile'
            options={{
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => (
                <AntDesign
                  name='user'
                  size={focused ? size + addedSizeOnActive : size}
                  color={color}
                />
              ),
              tabBarLabel: ({ color, focused }) => (
                <TabLabel color={color} focused={focused} name={'Profile'} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>

      <SafeAreaView edges={{ bottom: 'additive' }} />
    </>
  );
};

export default TabsLayout;
