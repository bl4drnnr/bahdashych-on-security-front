import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(${(props) => props.theme.colors.darkBackground});
`;

export const IntroTextBox = styled.div`
  width: 100%;
`;

export const IntroTextWrapper = styled.div`
  width: 45%;
  margin: 0 auto;
`;

export const TypewritingText = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 72px;
  font-weight: 100;
  &.small {
    font-size: 36px;
  }
  &.smaller {
    font-size: 22px;
    padding-top: 15px;
  }
`;
