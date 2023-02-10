import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgb(${(props) => props.theme.colors.darkBackground});
  bottom: 0;
  margin-top: auto;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

export const Box = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;

