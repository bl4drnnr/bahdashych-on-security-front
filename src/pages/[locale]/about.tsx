import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import PostFooter from '@components/PostFooter/PostFooter.component';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  AboutParagraph,
  AboutTitle,
  Box,
  Container,
  ImageBox,
  SharingLi,
  SharingUl
} from '@styles/about.style';


interface AboutProps {
  locale: string;
}

interface BadgeProps {
  src: string;
  width: number;
  height: number;
}

const About = ({ locale }: AboutProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [programmingLanguages, ] = React.useState<Array<BadgeProps>>([{
    src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    width: 126,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    width: 126,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
    width: 98,
    height: 28
  }]);
  const [frontFrameworks, ] = React.useState<Array<BadgeProps>>([{
    src: 'https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D',
    width: 85,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82',
    width: 85,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
    width: 85,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
    width: 85,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white',
    width: 106,
    height: 28
  }]);
  const [backFrameworks, ] = React.useState<Array<BadgeProps>>([{
    src: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
    width: 122,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white',
    width: 92,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white',
    width: 92,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white',
    width: 92,
    height: 28
  }]);

  const [otherTechs, ] = React.useState<Array<BadgeProps>>([{
    src: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
    width: 74,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white',
    width: 130,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
    width: 130,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
    width: 92,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white',
    width: 120,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white',
    width: 100,
    height: 28
  }, {
    src: 'https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white',
    width: 120,
    height: 28
  }]);

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
            <SharingUl>
              {
                Object.entries(t('pages:about.sharingKnowledge', { returnObjects: true }) as string)
                  .map(([key, value]) => (
                    <SharingLi
                      key={key}
                      dangerouslySetInnerHTML={{ __html: value }}
                    />
                  ))
              }
            </SharingUl>
            <AboutParagraph dangerouslySetInnerHTML={{ __html: t('pages:about.overall') }} />
          </Box>
          <Box>
            <AboutTitle>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(75)
                    .typeString('What do I know?')
                    .start();
                }}
              />
            </AboutTitle>
          </Box>
          <Box>
            <AboutParagraph>
              As an engineer, I would like to share with you about what I can work with. First of all I should start with that I started my career as the software engineer. I have been working in small startup.
            </AboutParagraph>
            <AboutParagraph>
              As usually, lets start with programming languages. For my entire career I have been working with different programming languages, some of them have been used only once for my (mostly university) projects, some of the have been used for a long period of time. But here are 3 most important and well-known by me:
            </AboutParagraph>
            <ImageBox>
              {programmingLanguages.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  className={'img'}
                  alt={item.src}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </ImageBox>
            <AboutParagraph>
              There were a lot of different framework though.
            </AboutParagraph>
            <ImageBox>
              {frontFrameworks.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  className={'img'}
                  alt={item.src}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </ImageBox>
            <ImageBox>
              {backFrameworks.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  className={'img'}
                  alt={item.src}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </ImageBox>
            <AboutParagraph>
              Here is the list of other technologies
            </AboutParagraph>
            <ImageBox>
              {otherTechs.slice(0, 3).map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  className={'img'}
                  alt={item.src}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </ImageBox>
            <ImageBox>
              {otherTechs.slice(3).map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  className={'img'}
                  alt={item.src}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </ImageBox>
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
