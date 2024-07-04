import React from 'react';
import { FlexStyle, Image, ImageSourcePropType } from 'react-native';

export interface ProductImageProps {
  BadgeText?: string;
  source?: ImageSourcePropType;
  width?: FlexStyle['width'];
}
