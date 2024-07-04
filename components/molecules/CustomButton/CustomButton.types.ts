import { TouchableOpacityProps } from 'react-native';

export interface CustomButtonProps extends TouchableOpacityProps {
  title?;
  handlePress?;
  containerStyles?;
  textStyles?;
  isLoading?;
}
