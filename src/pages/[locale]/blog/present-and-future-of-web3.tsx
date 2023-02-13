import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { ArticleBodyWrapper, ArticleTitle, PostParagraph } from '@styles/post.style';

interface PresentAndFutureOfWeb3Props {
  locale: string;
}

const PresentAndFutureOfWeb3 = ({ locale }: PresentAndFutureOfWeb3Props) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>{t('pages:home.name')} | {t('articles:presentAndFutureWeb3.title')}</title>
        <meta name={'keywords'} content={t('articles:presentAndFutureWeb3.tags') as string} />
        <meta name={'description'} content={t('articles:presentAndFutureWeb3.description') as string} />
        <meta charSet={'utf-8'} />
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <ArticleBodyWrapper>
          <ArticleTitle>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(75)
                  .typeString(t('articles:presentAndFutureWeb3.title'))
                  .start();
              }}
            />
          </ArticleTitle>
          <ArticleTitle className={'intro'}>
            {t('articles:presentAndFutureWeb3.intro')}
          </ArticleTitle>
          {[...Array(10)].map((x, i) =>
            <PostParagraph key={i}>
              {t(`articles:presentAndFutureWeb3.a${i + 1}`)}
            </PostParagraph>
          )}
        </ArticleBodyWrapper>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles']);
export { getStaticPaths, getStaticProps };

export default PresentAndFutureOfWeb3;
