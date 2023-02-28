import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import BasicButton from '@components/BasicButton/BasicButton.component';
import BasicInput from '@components/BasicInput/BasicInput.component';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  AllPostsWrapper,
  BlogIntroWrapper,
  BlogPostsDescription,
  BlogPostsTitle, ButtonWrapper, FoundPostWrapper,
  InputWrapper,
  PostDescription,
  PostTimestamp,
  PostTitle, SettingsWrapper,
  TestimonialArticle,
  TestimonialGrid
} from '@styles/blog.style';
// import * as dayjs from 'dayjs';


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
  const [dateSort, setDateSort] = React.useState('');
  const [nameSort, setNameSort] = React.useState('');
  const [foundPosts, setFoundPosts] = React.useState<PostProps[]>([]);
  const [allPosts, setAllPosts] = React.useState<PostProps[]>([{
    title: t('nextjs-nginx-deployment:title'),
    description: t('nextjs-nginx-deployment:pageDescription'),
    link: '/blog/nextjs-nginx-deployment',
    timestamp: t('nextjs-nginx-deployment:timestamp')
  }, {
    title: t('how-does-dns-work-and-why-we-need-dnssec:title'),
    description: t('how-does-dns-work-and-why-we-need-dnssec:pageDescription'),
    link: '/blog/how-does-dns-work-and-why-we-need-dnssec',
    timestamp: t('how-does-dns-work-and-why-we-need-dnssec:timestamp')
  }, {
    title: t('how-to-build-custom-dns-infrastructure:title'),
    description: t('how-to-build-custom-dns-infrastructure:pageDescription'),
    link: '/blog/how-to-build-custom-dns-infrastructure',
    timestamp: t('how-to-build-custom-dns-infrastructure:timestamp')
  }, {
    title: t('everything-you-need-to-know-about-hardening:title'),
    description: t('everything-you-need-to-know-about-hardening:pageDescription'),
    link: '/blog/everything-you-need-to-know-about-hardening',
    timestamp: t('everything-you-need-to-know-about-hardening:timestamp')
  }, {
    title: t('pki-infrastructure-or-how-to-build-your-own-vpn:title'),
    description: t('pki-infrastructure-or-how-to-build-your-own-vpn:pageDescription'),
    link: '/blog/pki-infrastructure-or-how-to-build-your-own-vpn',
    timestamp: t('pki-infrastructure-or-how-to-build-your-own-vpn:timestamp')
  }]);

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

  const sortByDate = (date: string) => {
    if (date === '') setDateSort('ASC');
    else if (date !== '' && date === 'ASC') setDateSort('DESC');
    else setDateSort('ASC');
  };

  const sortByName = (sortType: string) => {
    const currentPosts = allPosts;

    if (sortType !== '' && sortType === 'A -> Z') {
      setNameSort('Z -> A');
      currentPosts.sort((a, b) => b.title.localeCompare(a.title));
    } else {
      setNameSort('A -> Z');
      currentPosts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setAllPosts(currentPosts);
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
            <SettingsWrapper>
              <ButtonWrapper>
                <BasicButton
                  text={dateSort !== '' ? dateSort : 'ASC/DESC'}
                  onClick={() => sortByDate(dateSort)}
                />
              </ButtonWrapper>
              <ButtonWrapper>
                <BasicButton
                  text={nameSort !== '' ? nameSort : 'A-Z'}
                  onClick={() => sortByName(nameSort)}
                />
              </ButtonWrapper>
            </SettingsWrapper>
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

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };

export default Blog;
