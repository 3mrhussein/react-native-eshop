import { LanguageCode, LanguageType } from '@/hooks/useLanguage';

export type GlobalContextType = {
  isLoggedIn?: boolean;
  setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
  user?: any;
  setUser?: React.Dispatch<React.SetStateAction<any>>;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  isDataUpToDate?: boolean;
  setIsDataUpToDate?: React.Dispatch<React.SetStateAction<boolean>>;
  language?: LanguageCode;
  changeLanguage: (lng: LanguageCode) => void;
  languageList?: LanguageType[];
  textDirection?: string;
  isRTL?: boolean;
};
