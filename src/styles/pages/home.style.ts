import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(${(props) => props.theme.colors.lightBackground});
`;

export const IntroTextBox = styled.div`
  width: 100%;
`;

export const IntroTextWrapper = styled.div`
  width: 45%;
  margin: 100px auto 0 auto;

  @media only screen and (max-width: 780px) {
    width: 90%;
  }
`;

export const TypewritingText = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 72px;
  font-weight: 100;
  
  &.small {
    font-size: 36px;
    
    @media only screen and (max-width: 780px) {
      font-size: 24px;
    }
  }
  
  &.smaller {
    font-size: 22px;
    padding-top: 15px;

    @media only screen and (max-width: 780px) {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 780px) {
    font-size: 52px;
    text-align: center;
  }
`;

export const BlogPostsContainer = styled.div`
  width: 45%;
  margin: 100px auto 0 auto;

  @media only screen and (max-width: 780px) {
    width: 90%;
    margin: 50px auto 0 auto;
  }

  &.en {
    p, li, ul, h1, h3 {
      font-family: 'Charter', sans-serif;
    }
  }
  &.non-en {
    p, li, ul, h1, h3 {
      font-family: 'Crimson', serif;
    }
    p, li, ul {
      font-family: 'Crimson', serif;
      font-size: 1.1em;
    }
  }
`;

export const BlogPostPreview = styled.div`
  width: 100%;
  min-height: 100px;
  border: 1px solid rgba(${(props) => props.theme.colors.primaryDark}, .5);
  border-radius: 5px;
  transition: .2s;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 15px;
  
  &:hover {
    border: 1px solid rgb(${(props) => props.theme.colors.primaryDark});
  }
`;

export const BlogPostTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  color: rgb(${(props) => props.theme.colors.textColor});
`;

export const BlogPostDescription = styled.p`
  font-size: 1em;
  text-indent: 50px;
  font-weight: 300;
  color: rgb(${(props) => props.theme.colors.textColor}, .5);
`;

export const InterestingPosts = styled.h1`
  margin-bottom: 15px;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-weight: 500;
  
  .icon {
    vertical-align: middle;
  }
`;
