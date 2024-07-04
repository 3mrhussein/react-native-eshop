import { Text, Modal, TouchableOpacity, FlatList } from 'react-native';

import React from 'react';
import { useTranslation } from 'react-i18next';
import theme from '@/theme';
import { View } from 'react-native-animatable';
import { useGlobalContext } from '@/context/Global/GlobalProvider';
import DarkOpacityView from '@/components/atoms/DarkOpacityView/DarkOpacityView';

const LanguageListModal = ({ isVisible, setIsVisible }) => {
  const { language, changeLanguage, languageList } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <>
      <Modal
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <DarkOpacityView opacity={0.7} />
        <View className='z-10 h-full w-full justify-center items-center '>
          <FlatList
            className='m-auto rounded-3xl w-[80%]'
            contentContainerStyle={{
              backgroundColor: theme.colors.tertiary,
              borderRadius: 20,
              shadowColor: '#6f6f5f',
              shadowRadius: 2,
              shadowOffset: { height: 2, width: 0 },
              shadowOpacity: 0.7,
              padding: 20,
              maxWidth: 350,
              margin: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            keyExtractor={(item) => item.code}
            data={languageList}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                className={`${
                  item.code === language
                    ? 'rounded-md bg-primary shadow-sm shadow-black-100'
                    : ''
                } py-2 min-w-[100%]`}
                onPress={() => {
                  changeLanguage(item.code);

                  setIsVisible(false);
                }}
              >
                <Text className='text-white text-center font-pbold text-lg'>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  );
};

export default LanguageListModal;
