import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { Box, Container } from '@styles/about.style';

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
        <title>About</title>
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <Container>
          <Box></Box>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common']);
export { getStaticPaths, getStaticProps };

export default About;
