import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  color: rgb(${(props) => props.theme.colors.textColor});
  bottom: 0;
  position: absolute;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

export const Box = styled.div`
  width: 90%;
  height: 50%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`;
