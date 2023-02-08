import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: rgb(${(props) => props.theme.colors.darkBackground});
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
`;

export const Link = styled.h3`
  color: rgba(${(props) => props.theme.colors.textColor});
  font-family: "Roboto", sans-serif;
  font-weight: 100;
`;
