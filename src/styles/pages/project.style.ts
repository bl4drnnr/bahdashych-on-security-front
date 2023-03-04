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

export const SideBarTitle = styled.h3`
  padding: 5px 0;
  margin: 5px 0;
  border-top: 1px solid rgba(${(props) => props.theme.colors.textColor}, .25);
  
  :first-child {
    border-top: none;
    margin: 0;
    padding: 0;
  }
`;

export const SideBarParagraph = styled.p``;

export const ProjectHr = styled.hr`
  margin: 15px;
  opacity: .5;
`;

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;

  &.en {
    ${ProjectTitle},
    ${ProjectBrief},
    ${ProjectParagraph},
    ${SideBarTitle},
    ${SideBarParagraph},
    b {
      color: rgb(${(props) => props.theme.colors.textColor});
      font-family: 'Charter', sans-serif;
    }
  }
  &.non-en {
    ${ProjectTitle},
    ${ProjectBrief},
    ${ProjectParagraph},
    ${SideBarTitle},
    ${SideBarParagraph},
    b {
      color: rgb(${(props) => props.theme.colors.textColor});
      font-family: 'Crimson', serif;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
`;

export const SideBar = styled.div`
  display: block;
  float: right; 
  width: 300px;
  margin: 30px;
  border: 1px solid rgba(${(props) => props.theme.colors.textColor}, .25);
  border-radius: 8px;
  padding: 10px;
  
  .img {
    border-radius: 8px;
    margin-right: 5px;
  }
  
  @media only screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    float: none;
  }
`;

export const ImageWrapper = styled.div`
  overflow: auto;
`;
