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
      className={` bg-secondary rounded-xl h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      } `}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
