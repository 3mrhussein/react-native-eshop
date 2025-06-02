import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomButtonProps } from './CustomButton.types';

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{ elevation: 100 }}
      {...props}
      activeOpacity={0.7}
      className={` bg-secondary rounded-xl justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      } `}
      disabled={isLoading}
      {...props}
    >
      <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
