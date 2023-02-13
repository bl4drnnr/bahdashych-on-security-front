import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  width: 45%;
  margin: 100px auto 0 auto;

  @media only screen and (max-width: 780px) {
    width: 90%;
  }
`;

export const ProjectTitle = styled.h1`
  color: rgb(${(props) => props.theme.colors.textColor});
  text-align: center;
  font-size: 64px;
  font-weight: 100;

  @media only screen and (max-width: 780px) {
    font-size: 52px;
  }
`;

export const ProjectsDescription = styled.p`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-size: 24px;
  font-weight: 100;
  text-align: center;
  
  &.margins {
    margin: 25px 0;
  }
`;
