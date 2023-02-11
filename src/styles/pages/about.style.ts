import styled from 'styled-components';

export const Container = styled.div``;

export const Box = styled.div`
  width: 45%;
  margin: 100px auto 0 auto;

  @media only screen and (max-width: 780px) {
    width: 90%;
    margin: 50px auto 0 auto;
  }
`;

export const AboutTitle = styled.h3`
  font-weight: 100;
  font-size: 72px;
  color: rgb(${(props) => props.theme.colors.textColor});
  text-align: center;
  
  &.description {
    font-size: 32px;
    
    @media only screen and (max-width: 780px) {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 780px) {
    font-size: 52px;
  }
`;

export const AboutParagraph = styled.p`
  margin: 10px 0;
  font-weight: 200;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 18px;
`;
