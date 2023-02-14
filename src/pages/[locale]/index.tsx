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
  Container, InterestingPosts,
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
        <title>{t('pages:home.name')} | {t('pages:home.title')}</title>
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
                      .typeString(t('pages:home.name'))
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
                      .typeString(t('pages:home.workTitles'))
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
                      .typeString(t('pages:home.interests'))
                      .start();
                  }}
                />
              </TypewritingText>
            </IntroTextWrapper>

          </IntroTextBox>

          <BlogPostsContainer>
            <InterestingPosts>
            </InterestingPosts>
            <BlogPostPreview>
              <BlogPostTitle></BlogPostTitle>
              <BlogPostDescription></BlogPostDescription>
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
