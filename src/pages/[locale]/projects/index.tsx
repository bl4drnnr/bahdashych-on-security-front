import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import BasicInput from '@components/BasicInput/BasicInput.component';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  Container,
  Title,
  FlexWrapper,
  Name,
  Description,
  ProjectsDescription,
  ProjectsWrapper,
  ProjectTitle,
  TestimonialArticle,
  TestimonialGrid,
  InputWrapper
} from '@styles/projects.style';

interface ProjectProps {
  title: string;
  brief: string;
  description: string;
  link: string;
  icon: string;
}

interface ProjectsProps {
  locale: string;
}

const Projects = ({ locale }: ProjectsProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const testimonialGridAreas = ['one', 'two', 'three', 'four', 'five'];

  const [searchString, setSearchString] = React.useState('');
  const [allProjects,] = React.useState<ProjectProps[]>([{
    title: 'Daniel Clifford1',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford2',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford3',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford4',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford5',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford6',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford7',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford8',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford9',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }, {
    title: 'Daniel Clifford10',
    brief: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    link: '',
    icon: 'fire.png'
  }]);
  const [foundProjects, setFoundProjects] = React.useState<ProjectProps[]>([]);

  React.useEffect(() => {
    const foundSearchProjects: ProjectProps[] = [];

    allProjects.forEach((project) => {
      if (searchString && project.title.toLowerCase().includes(searchString.toLowerCase())) {
        foundSearchProjects.push(project);
      }
    });

    setFoundProjects(foundSearchProjects);
  }, [searchString]);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>{t('pages:home.name')} | {t('pages:projects.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <ProjectsWrapper>
          <ProjectTitle>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(75)
                  .typeString(t('pages:projects.description'))
                  .start();
              }}
            />
          </ProjectTitle>
          <ProjectsDescription className={'margins'}>
            {t('pages:projects.description2')}
          </ProjectsDescription>
        </ProjectsWrapper>

        <Container className={locale === 'en' ? 'en' : 'non-en'}>
          <InputWrapper>
            <BasicInput
              locale={locale}
              value={searchString}
              placeholder={t('common:searchProjects')}
              onChange={(e) => setSearchString(e.target.value)}
            />
          </InputWrapper>
          {allProjects.map((_, index) => {
            if ((index + 1) % 5 === 1 || index === 0) {
              return (
                <TestimonialGrid>
                  {allProjects.slice(index, index + 5).map((item, idx) => (
                    <TestimonialArticle
                      key={idx}
                      onClick={() => handleRedirect(item.link)}
                    >
                      <FlexWrapper>
                        <Image
                          className={'icon'}
                          src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/${item.icon}`}
                          alt={'Fire'}
                          width={22}
                          height={22}
                        />
                        <Name>{item.title}</Name>
                      </FlexWrapper>
                      <Title>{item.title}</Title>
                      <Description>{item.description}</Description>
                    </TestimonialArticle>
                  ))}
                </TestimonialGrid>
              );
            }
          })}
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };

export default Projects;
