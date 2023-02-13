import styled from 'styled-components';

export const ArticleTitle = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 72px;
  text-align: center;
  &.intro {
    font-size: 24px;
    font-weight: 100;
    margin: 75px 0;

    @media only screen and (max-width: 780px) {
      font-size: 20px;
      margin: 25px 0;
    }
  }

  @media only screen and (max-width: 780px) {
    font-size: 48px;
  }
`;

export const ArticleBodyWrapper = styled.div`
  width: 45%;
  margin: 100px auto 0 auto;
  @media only screen and (max-width: 780px) {
    width: 90%;
  }
`;

export const PostParagraph = styled.p`
  font-family: 'Charter', sans-serif;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 20px;
  line-height: 30px;
  padding-top: 30px;
  text-indent: 50px;
  font-weight: 400;

  &.title {
    text-indent: 0;
    margin-top: 30px;
    font-size: 32px;
  }
  
  &.subtitle {
    text-indent: 0;
    font-size: 24px;
  }
  
  &:last-child {
    margin-bottom: 200px;
  }

  @media only screen and (max-width: 780px) {
    font-size: 18px;
    text-indent: 25px;
  }
`;
