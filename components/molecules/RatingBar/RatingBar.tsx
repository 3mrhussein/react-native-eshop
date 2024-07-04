import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Star from '@/components/atoms/Star/Star';

const getStarArray = (averageRating) => {
  const star: string[] = [];
  let remains = averageRating;
  for (let i = 0; i < 5; i++) {
    if (remains >= 1) {
      star.push('full');
    } else if (remains > 0) {
      star.push('half');
    } else star.push('empty');
    remains -= 1;
  }
  return star;
};

const RatingBar = ({
  TotalRatings = 10,
  AverageRating = 4.5,
  isRTL = false,
  spacing = 4,
}) => {
  const starArray = getStarArray(AverageRating);
  return (
    <View className=' flex-row items-center'>
      {starArray.map((type, index) => (
        <Star
          size={15}
          key={index}
          type={type}
          style={{
            marginRight: !isRTL && spacing,
            marginLeft: isRTL && spacing,
          }}
        />
      ))}
      <Text className=' text-xs text-light-200'>{`(${TotalRatings})`}</Text>
    </View>
  );
};

export default RatingBar;
