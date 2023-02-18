import React from 'react';

import Image from 'next/image';
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
    flag: 'pl',
    prefix: 'pl'
  }, {
    flag: 'ru',
    prefix: 'ru'
  }, {
    flag: 'en',
    prefix: 'en'
  }]);

  React.useEffect(() => {
    switch (defaultLanguage) {
      case 'en':
        setPickedLanguage('en');
        break;
      case 'ru':
        setPickedLanguage('ru');
        break;
      case 'pl':
        setPickedLanguage('pl');
        break;
      default:
        setPickedLanguage('en');
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
          {pickedLanguage && (
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/${pickedLanguage}.png`}
              alt={pickedLanguage}
              width={32}
              height={32}
            />
          )}
        </CurrentLanguage>
      )}
      {showLanguages && (
        <SelectLanguages>
          {languages.map((item, index) => (
            <LanguageItem
              key={index}
              onClick={() => handleRedirect(item)}
            >
              {item.flag && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/${item.flag}.png`}
                  alt={item.flag}
                  width={32}
                  height={32}
                />
              )}
            </LanguageItem>
          ))}
        </SelectLanguages>
      )}
    </>
  );
};

export default ChangeLanguage;
