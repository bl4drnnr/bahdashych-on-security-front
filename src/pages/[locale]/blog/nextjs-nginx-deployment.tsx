import React from 'react';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';

interface NextjsNginxDeploymentProps {
  locale: string;
}

const NextjsNginxDeployment = ({ locale }: NextjsNginxDeploymentProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <DefaultLayout locale={locale} translation={t}>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles']);
export { getStaticPaths, getStaticProps };

export default NextjsNginxDeployment;
