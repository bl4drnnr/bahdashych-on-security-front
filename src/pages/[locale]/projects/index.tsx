import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';


interface ProjectsProps {
  locale: string;
}

const Projects = ({ locale }: ProjectsProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <></>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common']);
export { getStaticPaths, getStaticProps };

export default Projects;
