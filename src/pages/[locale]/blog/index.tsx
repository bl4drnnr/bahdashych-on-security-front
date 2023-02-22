import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import BasicInput from '@components/BasicInput/BasicInput.component';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  AllPostsWrapper,
  BlogIntroWrapper,
  BlogPostsDescription,
  BlogPostsTitle, FoundPostWrapper,
  InputWrapper,
  PostDescription,
  PostTimestamp,
  PostTitle,
  TestimonialArticle,
  TestimonialGrid
} from '@styles/blog.style';


interface BlogProps {
  locale: string;
}

interface PostProps {
  title: string;
  description: string;
  link: string;
  timestamp: string;
}

const Blog = ({ locale }: BlogProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [searchString, setSearchString] = React.useState('');
  const [allPosts,] = React.useState<PostProps[]>([{
    title: t('articles:nextjs-nginx-deployment.title'),
    description: t('articles:nextjs-nginx-deployment.pageDescription'),
    link: '/blog/nextjs-nginx-deployment',
    timestamp: t('articles:nextjs-nginx-deployment.timestamp')
  }, {
    title: t('articles:how-does-dns-work-and-why-we-need-dnssec.title'),
    description: t('articles:how-does-dns-work-and-why-we-need-dnssec.pageDescription'),
    link: '/blog/how-does-dns-work-and-why-we-need-dnssec',
    timestamp: t('articles:how-does-dns-work-and-why-we-need-dnssec.timestamp')
  }, {
    title: t('articles:everything-you-need-to-know-about-hardening.title'),
    description: t('articles:everything-you-need-to-know-about-hardening.pageDescription'),
    link: '/blog/everything-you-need-to-know-about-hardening',
    timestamp: t('articles:everything-you-need-to-know-about-hardening.timestamp')
  }, {
    title: t('articles:pki-infrastructure-or-how-to-build-your-own-vpn.title'),
    description: t('articles:pki-infrastructure-or-how-to-build-your-own-vpn.pageDescription'),
    link: '/blog/pki-infrastructure-or-how-to-build-your-own-vpn',
    timestamp: t('articles:pki-infrastructure-or-how-to-build-your-own-vpn.timestamp')
  }, {
    title: t('articles:how-to-build-custom-dns-infrastructure.title'),
    description: t('articles:how-to-build-custom-dns-infrastructure.pageDescription'),
    link: '/blog/how-to-build-custom-dns-infrastructure',
    timestamp: t('articles:how-to-build-custom-dns-infrastructure.timestamp')
  }]);
  const [foundPosts, setFoundPosts] = React.useState<PostProps[]>([]);

  React.useEffect(() => {
    const foundSearchPosts: PostProps[] = [];

    allPosts.forEach((post) => {
      if (searchString && post.title.toLowerCase().includes(searchString.toLowerCase())) {
        foundSearchPosts.push(post);
      }
    });

    setFoundPosts(foundSearchPosts);
  }, [searchString]);

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

        </BlogIntroWrapper>

        <AllPostsWrapper className={locale === 'en' ? 'en' : 'non-en'}>
          <InputWrapper>
            <BasicInput
              locale={locale}
              value={searchString}
              placeholder={t('common:searchPosts')}
              onChange={(e) => setSearchString(e.target.value)}
            />
          </InputWrapper>

          {foundPosts.length > 0 ? (
            <>
              {foundPosts.map((post, key) => (
                <BlogIntroWrapper
                  key={key}
                  className={'found-posts'}
                  onClick={() => handleRedirect(post.link)}
                >
                  <FoundPostWrapper>
                    <PostTitle>{post.title}</PostTitle>
                    <PostTimestamp>{post.timestamp}</PostTimestamp>
                    <PostDescription>{post.description}</PostDescription>
                  </FoundPostWrapper>
                </BlogIntroWrapper>
              ))}
            </>
          ) : (
            <TestimonialGrid>
              {allPosts.map((post, key) => (
                <TestimonialArticle key={key} onClick={() => handleRedirect(post.link)}>
                  <PostTitle>{post.title}</PostTitle>
                  <PostTimestamp>{post.timestamp}</PostTimestamp>
                  <PostDescription>{post.description}</PostDescription>
                </TestimonialArticle>
              ))}
            </TestimonialGrid>
          )}
        </AllPostsWrapper>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles', 'projects']);
export { getStaticPaths, getStaticProps };

export default Blog;
