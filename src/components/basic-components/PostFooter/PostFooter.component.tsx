import React from 'react';

import Image from 'next/image';

import { PostFooterProps } from '@components/PostFooter/PostFooter.interface';
import { Container, Message } from '@styles/PostFooter.style';

const PostFooter = ({ message }: PostFooterProps) => {
  const handleRedirect = (link: string) => {
    window.open(`https://${link}`, '_blank', 'noreferrer');
  };

  return (
    <Container>
      <Message>{message}</Message>
      <Message className={'link'} onClick={() => handleRedirect('github.com/bl4drnnr')}>
        <Image className={'img'} src={'/img/github.svg'} alt={'GitHub'} width={24} height={24}/>
        github.com/bl4drnnr
      </Message>
      <Message className={'link'} onClick={() => handleRedirect('linkedin.com/in/mikhail-bahdashych')}>
        <Image className={'img'} src={'/img/linkedin.svg'} alt={'GitHub'} width={24} height={24}/>
        linkedin.com/in/mikhail-bahdashych
      </Message>
    </Container>
  );
};

export default PostFooter;
