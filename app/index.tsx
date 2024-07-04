import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { I18nManager, Image, Text, TouchableOpacity, View } from 'react-native';
import images from '../constants/images';
import CustomButton from '@/components/molecules/CustomButton/CustomButton';
import { useGlobalContext } from '@/context/Global/GlobalProvider';
import { useEffect, useState } from 'react';
import { requestPermissions } from '@/helpers/permissions';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import theme from '../theme';
import LanguageListModal from '@/components/organisms/LanguageListModal/LanguageListModal';
export default function Index() {
  const { t } = useTranslation();
  const { isLoggedIn, isLoading } = useGlobalContext();
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  useEffect(() => {
    // if (router) router.replace('/home');
    requestPermissions();
  }, []);
  //using safe area view to avoid notching collision
  return isLoggedIn && !isLoading ? (
    <Redirect href={'/home'} />
  ) : (
    <SafeAreaView className='h-full bg-primary'>
      <View className='bg-primary border-red-500'>
        <View className='flex w-full items-center h-full px-4'>
          <TouchableOpacity
            onPress={() => setIsLanguageModalVisible(true)}
            activeOpacity={0.7}
            className='flex items-end w-full'
          >
            <Text>
              <SimpleLineIcons
                name='globe'
                size={30}
                color={theme.colors.tertiary}
              />
            </Text>
          </TouchableOpacity>
          <View className='flex-1 max-h-[60%] justify-center'>
            <Image
              source={images.logo}
              className='max-h-[40vw] max-w-[40vw] aspect-square rounded-full'
              resizeMode='contain'
            />
          </View>

          <Text className='text-lg font-plight mb-4 text-secondary text-center'>
            {t('slogan')}
          </Text>
          <CustomButton
            title={t('explore')}
            onPress={() => router.replace('/home')}
            containerStyles='w-full bg-secondary'
            isLoading={false}
            textStyles={'text-gray-200'}
          />
          <LanguageListModal
            setIsVisible={setIsLanguageModalVisible}
            isVisible={isLanguageModalVisible}
          />
        </View>

        <StatusBar backgroundColor='#161622' style='light' />
      </View>
    </SafeAreaView>
  );
}
