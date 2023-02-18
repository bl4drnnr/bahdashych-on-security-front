import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

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
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <Container>
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
            <AboutParagraph>
              {t('pages:about.overall')}
            </AboutParagraph>
          </Box>
          <Box>
            <AboutParagraph>
              In case if you have any issues/propositions or whatever reason you have to contact me you can do that using next channels. Do not hesitate to do that, I will always be glad to have a small talk, so, here you go:
            </AboutParagraph>
          </Box>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles']);
export { getStaticPaths, getStaticProps };

export default About;
