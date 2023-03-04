import styled from 'styled-components';

export const ProjectTitle = styled.h1`
  padding: 0 15px;
  font-size: 64px;
`;

export const ProjectBrief = styled.h3`
  padding: 0 15px;
  font-size: 28px;
`;

export const ProjectParagraph = styled.p`
  text-indent: 50px;
  padding: 10px;
`;

export const ProjectHr = styled.hr`
  margin: 15px;
  opacity: .5;
`;

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;

  &.en {
    ${ProjectTitle}, ${ProjectBrief}, ${ProjectParagraph}, b {
      color: rgb(${(props) => props.theme.colors.textColor});
      font-family: 'Charter', sans-serif;
    }
  }
  &.non-en {
    ${ProjectTitle}, ${ProjectBrief}, ${ProjectParagraph}, b {
      color: rgb(${(props) => props.theme.colors.textColor});
      font-family: 'Crimson', serif;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
`;

export const SideBar = styled.div`
  float: right; 
  width: 200px;
  height: 500px;
  margin: 30px;
  border: 1px solid rgba(${(props) => props.theme.colors.textColor}, .25);
  border-radius: 8px;
  
  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: 200px;
    margin: 0 auto;
    float: none;
  }
`;
