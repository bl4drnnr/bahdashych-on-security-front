import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  width: 45%;
  height: 300px;
  margin: 100px auto 0 auto;
  text-align: center;

  @media only screen and (max-width: 780px) {
    width: 90%;
    margin: 50px auto 0 auto;
  }
`;

export const MainMessage = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 64px;
  font-weight: 500;

  @media only screen and (max-width: 780px) {
    font-size: 52px;
  }
`;

export const SecondaryMessage = styled.h3`
  margin: 50px 0;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 32px;
  font-weight: 100;

  @media only screen and (max-width: 780px) {
    font-size: 24px;
  }
`;

export const RedirectMessage = styled.p`
  color: rgb(${(props) => props.theme.colors.primaryDark});
  font-size: 24px;
  cursor: pointer;
`;

