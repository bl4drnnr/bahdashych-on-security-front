import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import PostFooter from '@components/PostFooter/PostFooter.component';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { AboutParagraph, AboutTitle, Box, Container } from '@styles/about.style';


interface AboutProps {
  locale: string;
}

const About = ({ locale }: AboutProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>{t('pages:home.name')} | {t('pages:about.title')}</title>
        <meta name={'keywords'} content={'mikhail bahdashych,mikhail,bahdashych,blog,cybersecurity,portfolio'} />
        <meta name={'description'} content={'Hello there! My name is Mikhail Bahdashych and this is my personal blog - place where I share my thoughts and knowledge. Hope you will find something interesting.'} />
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <Container className={locale === 'en' ? 'en' : 'non-en'}>
          <Box>
            <AboutTitle>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(75)
                    .typeString(t('pages:about.thanks'))
                    .start();
                }}
              />
            </AboutTitle>
            <AboutTitle className={classNames('description')}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(75)
                    .typeString(t('pages:about.appreciating'))
                    .start();
                }}
              />
            </AboutTitle>
          </Box>
          <Box>
            <AboutParagraph>
              {t('pages:about.reasonForReading')}
            </AboutParagraph>
            <ul className={'sharing-ul'}>
              {
                Object.entries(t('pages:about.sharingKnowledge', { returnObjects: true }) as string)
                  .map(([key, value]) => (
                    <li
                      key={key}
                      className={'sharing-li'}
                      dangerouslySetInnerHTML={{ __html: value }}
                    />
                  ))
              }
            </ul>
            <AboutParagraph dangerouslySetInnerHTML={{ __html: t('pages:about.overall') }} />
          </Box>
          <Box>
            <AboutTitle>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(75)
                    .typeString(t('pages:about.contactMe'))
                    .start();
                }}
              />
            </AboutTitle>
          </Box>
          <Box>
            <AboutParagraph>{t('pages:about.contactInfo')}</AboutParagraph>
            <PostFooter locale={locale} />
          </Box>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };

export default About;
