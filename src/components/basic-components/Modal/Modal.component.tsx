import React from 'react';

import { ModalProps } from '@components/Modal/Modal.interface';
import { ChildrenWrapper, Container, Description, ModalTile, WindowHeader, Wrapper } from '@styles/Modal.style';

const Modal = ({ onClose, header, description, children }: ModalProps) => {
  return (
    <Container onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <WindowHeader>
          <p onClick={onClose}>Close</p>
          {/*<Image src={Back} alt={'close'} width={72} height={72} onClick={onClose}/>*/}
          <ModalTile>{header}</ModalTile>
        </WindowHeader>
        <Description>{description}</Description>
        <ChildrenWrapper>
          {children}
        </ChildrenWrapper>
      </Wrapper>
    </Container>
  );
};

export default Modal;
