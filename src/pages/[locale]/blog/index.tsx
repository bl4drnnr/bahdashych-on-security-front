import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  BlogIntroWrapper,
  BlogPostsDescription,
  BlogPostsTitle,
  PostDescription,
  PostPreview,
  PostTitle
} from '@styles/blog.style';


interface BlogProps {
  locale: string;
}

interface PostProps {
  title: string;
  description: string;
  link: string;
}

const Blog = ({ locale }: BlogProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [allPosts,] = React.useState<PostProps[]>([{
    title: t('articles:nextjs-nginx-deployment.title'),
    description: t('articles:nextjs-nginx-deployment.pageDescription'),
    link: '/blog/nextjs-nginx-deployment'
  }, {
    title: t('articles:everything-you-need-to-know-about-hardening.title'),
    description: t('articles:everything-you-need-to-know-about-hardening.pageDescription'),
    link: '/blog/everything-you-need-to-know-about-hardening'
  }, {
    title: t('articles:pki-infrastructure-or-how-to-build-your-own-vpn.title'),
    description: t('articles:pki-infrastructure-or-how-to-build-your-own-vpn.pageDescription'),
    link: '/blog/pki-infrastructure-or-how-to-build-your-own-vpn'
  }]);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>{t('pages:home.name')} | {t('pages:blog.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translation={t}>

        <BlogIntroWrapper>
          <BlogPostsTitle>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(75)
                  .typeString(t('pages:blog.alexandriaLibrary'))
                  .start();
              }}
            />
          </BlogPostsTitle>

          <BlogPostsDescription className={'margins'}>
            {t('pages:blog.description')}
          </BlogPostsDescription>
          <BlogPostsDescription className={'margins'}>
            {t('pages:blog.description2')}
          </BlogPostsDescription>

          {allPosts.map((post, key) => (
            <PostPreview key={key} onClick={() => handleRedirect(post.link)}>
              <PostTitle>{post.title}</PostTitle>
              <PostDescription>{post.description}</PostDescription>
            </PostPreview>
          ))}
        </BlogIntroWrapper>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles', 'projects']);
export { getStaticPaths, getStaticProps };

export default Blog;
