import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const CommonLayout: React.FC<{
  paddingX?;
  otherStyles?: string;
  children?;
}> = ({ paddingX = 10, children, otherStyles }) => {
  return (
    <SafeAreaView className={`flex-1 px-${paddingX} ${otherStyles}`}>
      {children}
    </SafeAreaView>
  );
};

export default CommonLayout;
