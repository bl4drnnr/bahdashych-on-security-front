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

  const [programmingLanguages, ] = React.useState<Array<BadgeProps>>([
    { src: 'javascript', width: 126, height: 28 },
    { src: 'typescript', width: 126, height: 28 },
    { src: 'python', width: 98, height: 28 }
  ]);
  const [frontFrameworks, ] = React.useState<Array<BadgeProps>>([
    { src: 'vuedotjs', width: 85, height: 28 },
    { src: 'nuxtdotjs', width: 85, height: 28 },
    { src: 'react', width: 85, height: 28 },
    { src: 'next.js', width: 85, height: 28 },
    { src: 'angular', width: 106, height: 28 }
  ]);
  const [backFrameworks, ] = React.useState<Array<BadgeProps>>([
    { src: 'express', width: 122, height: 28 },
    { src: 'nestjs', width: 92, height: 28 },
    { src: 'django', width: 92, height: 28 },
    { src: 'flask', width: 92, height: 28 }
  ]);

  const [otherTechs, ] = React.useState<Array<BadgeProps>>([
    { src: 'amazon-aws', width: 74, height: 28 },
    { src: 'digitalOcean', width: 130, height: 28 },
    { src: 'Cloudflare', width: 130, height: 28 },
    { src: 'docker', width: 92, height: 28 },
    { src: 'kubernetes', width: 120, height: 28 },
    { src: 'ansible', width: 100, height: 28 },
    { src: 'terraform', width: 120, height: 28 }
  ]);

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
              {/*As an engineer, I would like to share with you about what I can work with. First of all I should start with that I started my career as the software engineer. I have been working in small startup.*/}
            </AboutParagraph>
            <AboutParagraph>
              {/*As usually, lets start with programming languages. For my entire career I have been working with different programming languages, some of them have been used only once for my (mostly university) projects, some of the have been used for a long period of time. But here are 3 most important and well-known by me:*/}
            </AboutParagraph>
            <ImageBox>
              {programmingLanguages.map((item, index) => (
                <Image
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/technologies-badges/${item.src}.svg`}
                  className={'img'}
                  alt={item.src}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </ImageBox>
            <AboutParagraph>
              {/*There were a lot of different framework though.*/}
            </AboutParagraph>
            <ImageBox>
              {frontFrameworks.map((item, index) => (
                <Image
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/technologies-badges/${item.src}.svg`}
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
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/technologies-badges/${item.src}.svg`}
                  className={'img'}
                  alt={item.src}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </ImageBox>
            <AboutParagraph>
              {/*Here is the list of other technologies*/}
            </AboutParagraph>
            <ImageBox>
              {otherTechs.slice(0, 3).map((item, index) => (
                <Image
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/technologies-badges/${item.src}.svg`}
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
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/technologies-badges/${item.src}.svg`}
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
