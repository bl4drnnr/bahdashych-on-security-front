import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import DefaultLayout from '@layouts/Default.layout';
import { makeStaticProps } from '@lib/getStatic';

interface ProjectProps {
  locale: string;
  projectName: string;
}

const Project = ({ locale, projectName }: ProjectProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>{t('pages:home.name')} | {t(`articles:${projectName}.title`)}</title>
        <meta name={'keywords'} content={t(`articles:${projectName}.tags`) as string} />
        <meta name={'description'} content={t(`articles:${projectName}.description`) as string} />
        <meta charSet={'utf-8'} />
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <>
          {projectName}
        </>
      </DefaultLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const staticProps = await makeStaticProps(['pages', 'components', 'common', 'articles', 'projects']);
  const pageProps = await staticProps(ctx);
  const props = pageProps.props;

  return {
    props: {
      ...props
    }
  };
};

export default Project;
