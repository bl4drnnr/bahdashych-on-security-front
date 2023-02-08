import React from 'react';

import classNames from 'classnames';
import Typewriter from 'typewriter-effect';

import DefaultLayout from '@layouts/Default.layout';
import { Container, IntroTextBox, IntroTextWrapper, TypewritingText } from '@styles/home.style';

const Home = () => {

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
          </IntroTextWrapper>

        </IntroTextBox>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
