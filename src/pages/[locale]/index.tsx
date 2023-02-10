import React from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import DefaultLayout from '@layouts/Default.layout';
import {
  BlogPostDescription,
  BlogPostPreview,
  BlogPostsContainer, BlogPostTitle,
  Container,
  IntroTextBox,
  IntroTextWrapper,
  TypewritingText
} from '@styles/home.style';

const Home = () => {
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <DefaultLayout>
      <Container>
        <IntroTextBox>

          <IntroTextWrapper>
            <TypewritingText>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(75)
                    .typeString('Mikhail Bahdashych')
                    .start();
                }}
              />
            </TypewritingText>

            <TypewritingText className={classNames('small')}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1250)
                    .changeDelay(35)
                    .typeString('Software Engineer / Security Operations Specialist')
                    .start();
                }}
              />
            </TypewritingText>

            <TypewritingText className={classNames('smaller')}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2750)
                    .changeDelay(25)
                    .typeString('Web Development, WEB3, Network Technologies, DevOps & Cybersecurity.')
                    .start();
                }}
              />
            </TypewritingText>
          </IntroTextWrapper>

        </IntroTextBox>

        <BlogPostsContainer>
          <BlogPostPreview>
            <BlogPostTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, velit.</BlogPostTitle>
            <BlogPostDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid autem corporis dicta dolores magnam mollitia nisi officiis, ratione soluta.</BlogPostDescription>
          </BlogPostPreview>
          <BlogPostPreview>
            <BlogPostTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, velit.</BlogPostTitle>
            <BlogPostDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid autem corporis dicta dolores magnam mollitia nisi officiis, ratione soluta.</BlogPostDescription>
          </BlogPostPreview>
          <BlogPostPreview>
            <BlogPostTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, velit.</BlogPostTitle>
            <BlogPostDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid autem corporis dicta dolores magnam mollitia nisi officiis, ratione soluta.</BlogPostDescription>
          </BlogPostPreview>
        </BlogPostsContainer>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
