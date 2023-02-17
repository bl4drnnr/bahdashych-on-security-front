import Document, { Html, Head, Main, NextScript } from 'next/document';

import i18nextConfig from '@i18config';

class AppDocument extends Document {
  render() {
    const currentLocale: string | string[] = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale as string}>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico"/>
          <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css'/>
          <meta name={'keywords'} content={'Mikhail Bahdashych,blog,cybersecurity,portfolio'} />
          <meta name={'description'} content={'Mikhail Bahdashych personal blog and portfolio page'} />
          <meta httpEquiv={'Content-Type'} content="text/html; charset=utf-8" />
          <meta charSet={'utf-8'} />
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
