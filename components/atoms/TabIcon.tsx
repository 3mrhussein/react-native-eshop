import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//color and focused is being returned by callback function of the tabBarIcon

const TabIcon = ({ icon, color, size }) => {
  return (
    <Image
      source={icon}
      style={{ width: size, height: size }}
      resizeMode='contain'
      tintColor={color}
    />
  );
};

export default TabIcon;
