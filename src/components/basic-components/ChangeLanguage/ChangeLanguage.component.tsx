import React from 'react';

import { useRouter } from 'next/router';

import { ChangeLanguageProps } from '@components/ChangeLanguage/ChangeLanguage.interface';
import { CurrentLanguage, LanguageItem, SelectLanguages } from '@styles/ChangeLanguage.style';

interface LanguageItem {
  flag: string;
  prefix: string;
}

const ChangeLanguage = ({ defaultLanguage, path }: ChangeLanguageProps) => {
  const router = useRouter();

  const [showLanguages, setShowLanguages] = React.useState(false);
  const [pickedLanguage, setPickedLanguage] = React.useState('');
  const [languages,] = React.useState([{
    flag: '🇵🇱',
    prefix: 'pl'
  }, {
    flag: '🇷🇺',
    prefix: 'ru'
  }, {
    flag: '🇬🇧',
    prefix: 'en'
  }]);

  React.useEffect(() => {
    switch (defaultLanguage) {
      case 'en':
        setPickedLanguage('🇬🇧');
        break;
      case 'ru':
        setPickedLanguage('🇷🇺');
        break;
      case 'pl':
        setPickedLanguage('🇵🇱');
        break;
      default:
        setPickedLanguage('🇬🇧');
        break;
    }
  }, []);

  const handleRedirect = async (item: LanguageItem) => {
    setShowLanguages(false);
    setPickedLanguage(item.flag);
    if (path.split('/').length === 2) window.location.href = `${process.env.NEXT_PUBLIC_FRONT_URL}${item.prefix}`;
    else window.location.href = `${process.env.NEXT_PUBLIC_FRONT_URL}${item.prefix}/${path.substring(4)}`;
  };

  return (
    <>
      {!showLanguages && (
        <CurrentLanguage
          onClick={() => setShowLanguages(!showLanguages)}
        >
          {pickedLanguage}
        </CurrentLanguage>
      )}
      {showLanguages && (
        <SelectLanguages>
          {languages.map((item, index) => (
            <LanguageItem
              key={index}
              onClick={() => handleRedirect(item)}
            >
              {item.flag}
            </LanguageItem>
          ))}
        </SelectLanguages>
      )}
    </>
  );
};

export default ChangeLanguage;
