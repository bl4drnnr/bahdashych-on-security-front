import '@styles/globals.scss';
import React from 'react';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico"/>
          <meta name={'keywords'} content={'Mikhail Bahdashych,blog,cybersecurity,portfolio'} />
          <meta name={'description'} content={'Mikhail Bahdashych personal blog and portfolio page'} />
          <meta charSet={'utf-8'} />
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default appWithTranslation(App);
