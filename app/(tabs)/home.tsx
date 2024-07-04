import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import { useGlobalContext } from '@/context/Global/GlobalProvider';
import { HomeTopImage } from '@/static';
import { useTranslation } from 'react-i18next';
import HeroBanner from '@/components/molecules/HeroBanner/HeroBanner';
import ProductCard from '@/components/organisms/ProductCard/ProductCard';
import CategoryPreview from '../containers/CategoryPreview/CategoryPreview';
const fakeCardsArray = ['', '', '', '', ''];
const Home = () => {
  const { t } = useTranslation();
  const { isRTL } = useGlobalContext();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className='flex-col bg-white'
    >
      <HeroBanner
        title={t('HomeHeroTitle')}
        backgroundImage={HomeTopImage}
        height={250}
        isRTL={isRTL}
      />
      <View className='mb-2'>
        <CategoryPreview to='/cart'>
          <FlatList
            horizontal
            data={fakeCardsArray}
            renderItem={() => <ProductCard />}
            showsHorizontalScrollIndicator={false}
          />
        </CategoryPreview>
        <CategoryPreview title='New'>
          <FlatList
            horizontal
            data={fakeCardsArray}
            renderItem={() => <ProductCard />}
            showsHorizontalScrollIndicator={false}
          />
        </CategoryPreview>
        <CategoryPreview>
          <FlatList
            horizontal
            data={fakeCardsArray}
            renderItem={() => <ProductCard />}
          />
        </CategoryPreview>
      </View>
    </ScrollView>
  );
};

export default Home;
