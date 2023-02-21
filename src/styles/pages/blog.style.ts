import styled from 'styled-components';

export const BlogIntroWrapper = styled.div`
  width: 45%;
  margin: 100px auto 0 auto;

  @media only screen and (max-width: 780px) {
    width: 90%;
  }
`;

export const BlogPostsTitle = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  text-align: center;
  font-size: 64px;
  font-weight: 100;

  @media only screen and (max-width: 780px) {
    font-size: 52px;
  }
`;

export const BlogPostsDescription = styled.p`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 24px;
  font-weight: 100;
  text-align: center;
  
  &.margins {
    margin: 25px 0;
  }
`;

export const PostPreview = styled.div`
  width: 100%;
  min-height: 100px;
  border: 1px solid rgba(${(props) => props.theme.colors.textColor}, .25);
  border-radius: 5px;
  transition: .2s;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 15px;
  
  &:hover {
    border: 1px solid rgb(${(props) => props.theme.colors.primaryLight});
  }
`;

export const AllPostsWrapper = styled.div`
  &.en {
    p, h3, li, ul {
      font-family: 'Charter', sans-serif;
    }
  }
  &.non-en {
    p, h3, li, ul {
      font-family: 'Crimson', serif;
    }
    p, li, ul {
      font-family: 'Crimson', serif;
      font-size: 1.1em;
    }
  }
`;

export const PostTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px; !important;
  font-weight: 600;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const PostDescription = styled.p`
  font-size: 1em;
  text-indent: 50px;
  font-weight: 300;
  color: rgb(${(props) => props.theme.colors.textColor}, .75);
`;
