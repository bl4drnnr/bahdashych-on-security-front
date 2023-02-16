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

export const PostParagraph = styled.p`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 20px;
  line-height: 30px;
  padding-top: 30px;
  text-indent: 50px;
  font-weight: 400;

  &.title {
    font-weight: 900;
    text-indent: 0;
    margin-top: 30px;
    font-size: 32px;
  }
  
  &.subtitle {
    font-weight: 700;
    text-indent: 0;
    font-size: 24px;
  }
  
  @media only screen and (max-width: 780px) {
    font-size: 18px;
    text-indent: 25px;
  }
`;

export const ArticleBodyWrapper = styled.div`
  width: 45%;
  margin: 100px auto 0 auto;
  @media only screen and (max-width: 780px) {
    width: 90%;
  }
  
  &.en {
    ${PostParagraph} {
      font-family: 'Charter', sans-serif;
    } 
  }
  &.non-en {
    ${PostParagraph} {
      font-family: 'Times New Roman', sans-serif;
    }
  }

  .codeBlock {
    font-size: 16px;
    font-family: 'Hack', sans-serif;
    padding: 2px;
    border-radius: 5px;
    background: rgb(${(props) => props.theme.colors.lightBackground});
  }
  
  .blogPostLi {
    font-size: 18px;
    color: rgb(${(props) => props.theme.colors.primaryDark});
    text-decoration: underline;
    display: table;
    counter-increment: item;
    margin-bottom: 0.6em;
    transition: .2s;

    :hover {
      cursor: pointer;
    }
    li:first-child {
      margin-top: 0.6em;
    }
    ::before {
      content: counters(item, ".") ". ";
      display: table-cell;
      padding-right: 0.6em;
    }
  }
  
  .blogPostOl {
    list-style-type: none;
    counter-reset: item;
    margin: 0;
    padding: 0;
  }
`;

export const TableOfContentsContainer = styled.div`
  &.en {
    h1, ol, li, span {
      font-family: 'Charter', sans-serif;
    } 
  }
  &.non-en {
    h1, ol, li, span {
      font-family: 'Times New Roman', sans-serif;
    }
  }
`;

export const TableOfContentsTitle = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  margin-bottom: 20px;
`;
