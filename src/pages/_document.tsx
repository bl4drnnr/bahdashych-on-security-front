import Document, { Html, Head, Main, NextScript } from 'next/document';

import i18nextConfig from '@i18config';

class AppDocument extends Document {
  render() {
    const currentLocale: string | string[] = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale as string}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </Html>
  );
  }
}

export default AppDocument;
