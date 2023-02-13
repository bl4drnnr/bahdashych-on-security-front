import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  BlogPostDescription,
  BlogPostPreview,
  BlogPostsContainer, BlogPostTitle,
  Container,
  IntroTextBox,
  IntroTextWrapper,
  TypewritingText
} from '@styles/home.style';

interface HomeProps {
  locale: string;
}

const Home = ({ locale }: HomeProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <Container>
          <IntroTextBox>

            <IntroTextWrapper>
              <TypewritingText>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(75)
                      .typeString('Mikhail Bahdashych')
                      .start();
                  }}
                />
              </TypewritingText>

              <TypewritingText className={classNames('small')}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1250)
                      .changeDelay(35)
                      .typeString('Software Engineer / Security Operations Specialist')
                      .start();
                  }}
                />
              </TypewritingText>

              <TypewritingText className={classNames('smaller')}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2750)
                      .changeDelay(25)
                      .typeString('Web Development, WEB3, Network Technologies, DevOps & Cybersecurity.')
                      .start();
                  }}
                />
              </TypewritingText>
              <TypewritingText className={classNames('smaller')}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2750)
                      .changeDelay(25)
                      .typeString('Web Development, WEB3, Network Technologies, DevOps & Cybersecurity.')
                      .start();
                  }}
                />
              </TypewritingText>
            </IntroTextWrapper>

          </IntroTextBox>

          <BlogPostsContainer>
            <BlogPostPreview
              onClick={() => handleRedirect('/blog/present-and-future-of-web3')}
            >
              <BlogPostTitle>{t('articles:presentAndFutureWeb3.title')}</BlogPostTitle>
              <BlogPostDescription>{t('articles:presentAndFutureWeb3.pageDescription')}</BlogPostDescription>
            </BlogPostPreview>
          </BlogPostsContainer>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles']);
export { getStaticPaths, getStaticProps };

export default Home;
