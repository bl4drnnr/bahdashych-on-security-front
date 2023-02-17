import React from 'react';

import Image from 'next/image';

import { PostFooterProps } from '@components/PostFooter/PostFooter.interface';
import { Container, Message, HrefLink, TimestampWrapper } from '@styles/PostFooter.style';

const PostFooter = ({ message, timestamp }: PostFooterProps) => {
  return (
    <Container>
      <Message className={'mess'}>{message}</Message>
      <Message className={'link'}>
        <Image className={'img'} src={'/img/github.svg'} alt={'GitHub'} width={24} height={24}/>
        <HrefLink href="https://github.com/bl4drnnr">github.com/bl4drnnr</HrefLink>
      </Message>
      <Message className={'link'}>
        <Image className={'img'} src={'/img/linkedin.svg'} alt={'GitHub'} width={24} height={24}/>
        <HrefLink href="https://linkedin.com/in/mikhail-bahdashych">linkedin.com/in/mikhail-bahdashych</HrefLink>
      </Message>
      <Message className={'link'}>
        <Image className={'img'} src={'/img/gmail.svg'} alt={'GitHub'} width={24} height={24}/>
        <HrefLink href="mailto:contact@mikhailbahdashych.me">contact@mikhailbahdashych.me</HrefLink>
      </Message>
      <TimestampWrapper>
        <Message className={'timestamp'}>{timestamp}</Message>
      </TimestampWrapper>
    </Container>
  );
};

export default PostFooter;
