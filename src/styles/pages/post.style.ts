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
    b {
      font-family: 'Charter', sans-serif;
    }
  }
  &.non-en {
    ${PostParagraph} {
      font-family: 'Crimson', serif;
    }
    b {
      font-family: 'Crimson', serif;
    }
  }

  .code-block {
    font-size: 16px;
    font-family: 'Hack', sans-serif;
    padding: 2px;
    border-radius: 5px;
    background: rgb(${(props) => props.theme.colors.lightBackground});
  }

  .table-of-contents-ul {
    font-size: 18px;
    color: rgb(${(props) => props.theme.colors.primaryDark});
    text-decoration: underline;
    margin-bottom: 0.6em;
    transition: .2s;
    margin-left: 20px;

    :hover {
      cursor: pointer;
    }
  }

  .table-of-contents-li {
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

  .table-of-contents-ol {
    list-style-type: none;
    counter-reset: item;
    margin: 0;
    padding: 0;
  }

  .blog-post-ul, .blog-post-ol {
    color: rgb(${(props) => props.theme.colors.textColor});
    margin: 20px 0 0 20px;
  }

  .blog-post-li {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;

    @media only screen and (max-width: 780px) {
      font-size: 18px;
    }
    &.en {
      font-family: 'Charter', sans-serif;
    }
    &.non-en {
      font-family: 'Crimson', serif;
    }
  }
`;

export const TableOfContentsContainer = styled.div`
  &.contact-and-references {
    margin-top: 30px;
    a {
      font-size: 20px;
    }
  }
  &.en {
    h1, ol, li, span, a {
      font-family: 'Charter', sans-serif;
    }
  }
  &.non-en {
    h1, ol, li, span, a {
      font-family: 'Crimson', serif;
    }
  }
`;

export const TableOfContentsTitle = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;
