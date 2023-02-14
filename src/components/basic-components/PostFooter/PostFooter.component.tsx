import React from 'react';

import { PostFooterProps } from '@components/PostFooter/PostFooter.interface';
import { Container, Message } from '@styles/PostFooter.style';

const PostFooter = ({ message }: PostFooterProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default PostFooter;
