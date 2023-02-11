import styled from 'styled-components';

export const ArticleTitle = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 72px;
  text-align: center;
  &.intro {
    font-size: 22px;
    font-weight: 400;
    margin: 75px 0;
  }
`;

export const ArticleBodyWrapper = styled.div`
  width: 45%;
  margin: 100px auto 0 auto;
`;

export const PostParagraph = styled.p`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 18px;
  padding-top: 15px;
  font-weight: 100;
  &:last-child {
    margin-bottom: 200px;
  }
`;
