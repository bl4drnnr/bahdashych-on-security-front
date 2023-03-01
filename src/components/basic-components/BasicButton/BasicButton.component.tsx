import React from 'react';

import classNames from 'classnames';

import { BasicButtonProps } from '@components/BasicButton/BasicButton.interface';
import { ButtonContent, Container, BasicButtonBox } from '@styles/BasicButton.style';

const BasicButton = ({
 text,
 onClick,
 active
}: BasicButtonProps) => {
  return (
    <Container>
      <BasicButtonBox
        onClick={onClick}
        className={classNames({ active })}
      >
        <ButtonContent>{text}</ButtonContent>
      </BasicButtonBox>
    </Container>
  );
};

export default BasicButton;
