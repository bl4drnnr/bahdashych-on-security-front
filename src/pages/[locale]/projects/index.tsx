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
  TestimonialGrid, InputWrapper
} from '@styles/projects.style';

interface ProjectProps {
  title: string;
}

interface ProjectsProps {
  locale: string;
}

const Projects = ({ locale }: ProjectsProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [searchString, setSearchString] = React.useState('');
  const [allProjects,] = React.useState<ProjectProps[]>([]);
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
          <TestimonialGrid>
            <TestimonialArticle>
              <FlexWrapper>
                <Image
                  className={'icon'}
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/fire.png`}
                  alt={'Fire'}
                  width={22}
                  height={22}
                />
                <Name>Daniel Clifford</Name>
              </FlexWrapper>
              <Title>
                I received a job offer mid-course, and the subjects I learned were current, if not more so,
                in the company I joined. I honestly feel I got every penny’s worth.
              </Title>
              <Description>
                 I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                transition and have heard some people who had an amazing experience here. I signed up
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                The next 12 weeks was the best - and most grueling - time of my life. Since completing
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.
              </Description>
            </TestimonialArticle>
            <TestimonialArticle>
              <FlexWrapper>
                <Image
                  className={'icon'}
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/fire.png`}
                  alt={'Fire'}
                  width={22}
                  height={22}
                />
                <Name>Jonathan Walters</Name>
              </FlexWrapper>
              <Title>
                The team was very supportive and kept me motivated
              </Title>
              <Description>
                 I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
                for a big company. This was one of the best investments I’ve made in myself.
              </Description>
            </TestimonialArticle>
            <TestimonialArticle>
              <FlexWrapper>
                <Image
                  className={'icon'}
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/fire.png`}
                  alt={'Fire'}
                  width={22}
                  height={22}
                />
                <Name>Jeanette Harmon</Name>
              </FlexWrapper>
              <Title>An overall wonderful and rewarding experience</Title>
              <Description>
                 Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
                while doing something I love.
              </Description>
            </TestimonialArticle>
            <TestimonialArticle>
              <FlexWrapper>
                <Image
                  className={'icon'}
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/fire.png`}
                  alt={'Fire'}
                  width={22}
                  height={22}
                />
                <Name>Patrick Abrams</Name>

              </FlexWrapper>
              <Title>
                Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
                learning from their experiences was easy.
              </Title>
              <Description>
                 The staff seem genuinely concerned about my progress which I find really refreshing. The program
                gave me the confidence necessary to be able to go out in the world and present myself as a capable
                junior developer. The standard is above the rest. You will get the personal attention you need from
                an incredible community of smart and amazing people.
              </Description>
            </TestimonialArticle>
            <TestimonialArticle>
              <FlexWrapper>
                <Image
                  className={'icon'}
                  src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/fire.png`}
                  alt={'Fire'}
                  width={22}
                  height={22}
                />
                <Name>Kira Whittle</Name>
              </FlexWrapper>
              <Title>
                Such a life-changing experience. Highly recommended!
              </Title>
              <Description>
                 Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                could ever have. In fact, I’ve often referred to it during interviews as an example of my development
                experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
                100% recommend!
              </Description>
            </TestimonialArticle>
          </TestimonialGrid>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles', 'projects']);
export { getStaticPaths, getStaticProps };

export default Projects;
