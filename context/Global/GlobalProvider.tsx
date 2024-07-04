import { getCurrentUser } from '@/api/user';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';
import { GlobalContextType } from './Global.types';
import useLanguage, { LanguageCode } from '@/hooks/useLanguage';
import { getSavedLanguage } from '@/helpers/utils';

const initialContextValue = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
  isDataUpToDate: false,
  language: 'en' as LanguageCode,
  changeLanguage: (lng: LanguageCode) => {},
};

const GlobalContext = createContext<GlobalContextType>(initialContextValue);

export const useGlobalContext = (): GlobalContextType =>
  useContext(GlobalContext);

const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataUpToDate, setIsDataUpToDate] = useState(true);
  const {
    isRTL,
    setIsRTL,
    textDirection,
    language,
    languageList,
    changeLanguage,
  } = useLanguage();

  useEffect(() => {
    getSavedLanguage()
      .then((lang) => {
        changeLanguage(lang as LanguageCode);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isRTL]);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
        isDataUpToDate,
        setIsDataUpToDate,
        language,
        changeLanguage,
        languageList,
        textDirection,
        isRTL,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
