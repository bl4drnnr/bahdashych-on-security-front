import React from 'react';

import Image from 'next/image';

import { PostFooterProps } from '@components/PostFooter/PostFooter.interface';
import { Container, Message, HrefLink } from '@styles/PostFooter.style';

const PostFooter = ({ message }: PostFooterProps) => {
  const handleRedirect = (link: string, type = 'link') => {
    if (type === 'link')
      window.open(`https://${link}`, '_blank', 'noreferrer');
    else
      window.open(link, '_blank', 'noreferrer');
  };

  return (
    <Container>
      <Message>{message}</Message>
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
    </Container>
  );
};

export default PostFooter;
