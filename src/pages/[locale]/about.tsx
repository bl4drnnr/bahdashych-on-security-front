import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
        <title>Mikhail Bahdashych | {t('pages:about.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <Container>
          <Box>
            <AboutTitle>
              {t('pages:about.thanks')}
            </AboutTitle>
            <AboutTitle className={classNames('description')}>
              {t('pages:about.appreciating')}
            </AboutTitle>
          </Box>
          <Box>
            <AboutParagraph>
              {t('pages:about.reasonForReading')}
            </AboutParagraph>
            <AboutParagraph>
              {t('pages:about.teachingOther')}
            </AboutParagraph>
            <AboutParagraph>
              <b>{t('pages:about.personalGrowthTitle')}</b> {t('pages:about.personalGrowthDescription')}
            </AboutParagraph>
            <AboutParagraph>
              <b>{t('pages:about.relationshipsTitle')}</b> {t('pages:about.relationshipsDescription')}
            </AboutParagraph>
            <AboutParagraph>
              <b>{t('pages:about.influenceTitle')}</b> {t('pages:about.influenceDescription')}
            </AboutParagraph>
            <AboutParagraph>
              <b>{t('pages:about.problemsTitle')}</b> {t('pages:about.problemsDescription')}
            </AboutParagraph>
            <AboutParagraph>
              <b>{t('pages:about.careerTitle')}</b> {t('pages:about.careerDescription')}
            </AboutParagraph>
            <AboutParagraph>
              <b>{t('pages:about.givingBackTitle')}</b> {t('pages:about.givingBackDescription')}
            </AboutParagraph>
            <AboutParagraph>
              {t('pages:about.overall')}
            </AboutParagraph>
          </Box>
          <Box>
            <AboutTitle>
              {t('pages:about.aboutMe')}
            </AboutTitle>
            <AboutTitle className={classNames('description')}>
              {t('pages:about.kidding')}
            </AboutTitle>
          </Box>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles']);
export { getStaticPaths, getStaticProps };

export default About;
