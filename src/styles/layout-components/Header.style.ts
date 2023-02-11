import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: rgb(${(props) => props.theme.colors.darkBackground});
  position: fixed;
  z-index: 998;
`;

export const Box = styled.div`
  width: 45%;
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  
  @media only screen and (max-width: 780px) {
    width: 100%;
  }
`;

export const Link = styled.h3`
  color: rgba(${(props) => props.theme.colors.textColor});
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  transition: .2s;
  cursor: pointer;
  
  &:hover {
    color: rgba(${(props) => props.theme.colors.primaryLight});
  }
  
  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

export const LanguageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
`;

export const ThemeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
`;

export const Hamburger = styled.div`
  position: absolute;
  display: none;
  height: 60px;
  top: 0;
  left: 20px;
  
  @media only screen and (max-width: 780px) {
    display: block;
  }
  
  .color {
    filter: invert(99%) sepia(77%) saturate(2%) hue-rotate(145deg) brightness(112%) contrast(101%);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
  background-color: rgb(${(props) => props.theme.colors.darkBackground});
  right: 0;
  left: 0;
  top: 65px;
  display: none;
  width: 100%;
  height: 60px;
  
  @media only screen and (max-width: 780px) {
    display: block;
  }
`;

export const MobileMenuWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const MobileLink = styled.h3`
  color: rgba(${(props) => props.theme.colors.textColor});
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  display: none;

  @media only screen and (max-width: 780px) {
    display: block;
  }
`;
