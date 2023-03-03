import styled from 'styled-components';

export const Container = styled.div`
  &.en {
    p, li, ul {
      font-family: "Charter", sans-serif;
    }
  }
  &.non-en {
    p, li, ul {
      font-family: 'Crimson', serif;
      font-size: 1.1em;
    }
  }
`;

export const Box = styled.div`
  width: 45%;
  margin: 50px auto 0 auto;

  @media only screen and (max-width: 780px) {
    width: 90%;
    margin: 50px auto 0 auto;
  }
`;

export const SharingUl = styled.ul`
  margin-left: 20px;
`;

export const SharingLi = styled.li`
  font-family: "Charter", sans-serif;
  margin: 15px 0;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 1.1em;
  font-weight: 200;
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
  font-weight: 100;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 1.1em;
  text-indent: 25px;
`;

export const ImageBox = styled.div`
  text-align: center;
  
  .img {
    margin: 0 3px;
  }
`;
