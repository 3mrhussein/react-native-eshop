import { useEffect, useState } from 'react';
import i18n from '@/i18n/config';
import { disableRTL, enableRTL, switchLanguage } from '@/helpers/utils';
import { I18nManager } from 'react-native';

export type LanguageCode = 'en' | 'ar';

export interface LanguageType {
  title: string;
  code: LanguageCode;
}

const languageList: LanguageType[] = [
  { title: 'English', code: 'en' },
  { title: 'عربي', code: 'ar' },
];
const useLanguage = () => {
  const [language, setLanguage] = useState<LanguageCode>(
    i18n.language as LanguageCode
  );
  const [isRTL, setIsRTL] = useState(false);

  const changeLanguage = async (Lng: LanguageCode) => {
    if (i18n.language !== Lng) {
      if (Lng === 'ar') await enableRTL(setIsRTL);
      else await disableRTL(setIsRTL);
      switchLanguage(Lng);
      setLanguage(Lng);
    }
  };

  const textDirection =
    language === 'en' ? 'items-start text-left' : 'items-end text-right';
  return {
    textDirection,
    languageList,
    language,
    changeLanguage,
    isRTL,
    setIsRTL,
  };
};

export default useLanguage;
