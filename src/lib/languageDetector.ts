import languageDetector from 'next-language-detector';

import i18nextConfig from '@i18config';

export default languageDetector({
  supportedLngs: i18nextConfig.i18n.locales,
  fallbackLng: i18nextConfig.i18n.defaultLocale
});
