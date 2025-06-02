import { View, Image, FlatList, TouchableOpacity, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserPosts, searchPosts } from '@/api/posts';
import useFetchData from '@/hooks/useFetchData';
import icons from '@/constants/icons';
import EmptyState from '@/components/EmptyState';
import VideoCard from '@/components/organisms/VideoCard/VideoCard';
import InfoBox from '@/components/molecules/InfoBox/InfoBox';
import { logoutUser } from '@/api/user';
import { router } from 'expo-router';
import { useGlobalContext } from '@/context/Global/GlobalProvider';
import images from '@/constants/images';
import TextComponent from '@/components/atoms/TextComponent/TextComponent';
import LinkListItem from '@/components/molecules/LinkListItem/LinkListItem';

const ItemContainer = ({ children }) => {
  return <View className=' border-b border-gray-200 py-3 '>{children}</View>;
};

const Profile = () => {
  return (
    <>
      <SafeAreaView edges={{ top: true }} />
      <Text className='p-4 text-3xl font-pbold'>My Profile</Text>
      <View className='flex-row m-2 mb-8'>
        <Image
          className='h-16 w-16 rounded-full mr-2'
          source={images.logo}
          resizeMode='cover'
        />
        <TextComponent title={'Amr'} subtitle={'pro3amr@gmail.com'} />
      </View>
      <ItemContainer>
        <LinkListItem title='My orders' subtitle='Already have 12 orders' />
      </ItemContainer>
      <ItemContainer>
        <LinkListItem title='Shipping addresses' subtitle='3 addresses' />
      </ItemContainer>
      <ItemContainer>
        <LinkListItem title='Payment methods' subtitle='Visa **34' />
      </ItemContainer>
      <ItemContainer>
        <LinkListItem
          title='Promocodes'
          subtitle='You have special promocodes'
        />
      </ItemContainer>
      <ItemContainer>
        <LinkListItem title='My reviews' subtitle='Reviews for 4 items' />
      </ItemContainer>
      <ItemContainer>
        <LinkListItem title='Settings' subtitle='Notifications, password' />
      </ItemContainer>
    </>
  );
};

export default Profile;
