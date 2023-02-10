import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { AboutParagraph, AboutTitle, Box, Container } from '@styles/about.style';


interface AboutProps {
  locale: string;
}

const About = ({ locale }: AboutProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <Container>
          <Box>
            <AboutTitle>
              Thank you!
            </AboutTitle>
            <AboutTitle className={classNames('description')}>
              I really appreciate you are interested in what I am doing.
            </AboutTitle>
          </Box>
          <Box>
            <AboutParagraph>
              The blog you are reading at the moment was created to share the knowledge that I have acquired during my entire professional career. I sincerely believe that the best way to learn anything is to start teaching other people, sharing your knowledge with them. And I have several reasons for this:
            </AboutParagraph>
            <AboutParagraph>
              <b>Personal Growth:</b> Sharing your knowledge with others helps you to better understand and articulate your own thoughts and ideas, which can lead to personal growth and development.
            </AboutParagraph>
            <AboutParagraph>
              <b>Building Relationships:</b> Sharing knowledge with others can foster strong relationships, as it shows that you value their opinions and are willing to help them grow and learn.
            </AboutParagraph>
            <AboutParagraph>
              <b>Increased Influence:</b> By sharing your knowledge and expertise with others, you can establish yourself as a thought leader in your field and increase your influence and credibility.
            </AboutParagraph>
            <AboutParagraph>
              <b>Improved Problem-Solving:</b> When you share knowledge with others, you can receive new perspectives and ideas that can help you tackle challenges and find solutions to problems more effectively.
            </AboutParagraph>
            <AboutParagraph>
              <b>Career Advancement:</b> Sharing your knowledge can lead to new opportunities and recognition, which can help you advance in your career.
            </AboutParagraph>
            <AboutParagraph>
              <b>Giving Back:</b> Sharing your knowledge can be a way of giving back to others and making a positive impact on their lives.
            </AboutParagraph>
            <AboutParagraph>
              Overall, sharing knowledge with others can have a number of personal, professional, and societal benefits, making it a valuable and rewarding experience.
            </AboutParagraph>
          </Box>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common']);
export { getStaticPaths, getStaticProps };

export default About;
