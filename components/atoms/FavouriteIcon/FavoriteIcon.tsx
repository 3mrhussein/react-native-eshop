import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import theme from '@/theme';
const FavoriteIcon = ({ active = false, style, onPress, IconSize = 24 }) => {
  const [isLiked, setIsLiked] = useState(active);
  const handlePress = async () => {
    setIsLiked(!isLiked);
    await onPress();
  };
  return (
    <Pressable
      onPress={handlePress}
      className={`p-3 bg-white shadow-sm shadow-gray-300 self-start rounded-full text-center`}
      style={style}
    >
      <AntDesign
        style={{ textAlign: 'center' }}
        name={isLiked ? 'heart' : 'hearto'}
        size={IconSize}
        color={isLiked ? 'black' : theme.colors.light[200]}
      />
    </Pressable>
  );
};

export default FavoriteIcon;
