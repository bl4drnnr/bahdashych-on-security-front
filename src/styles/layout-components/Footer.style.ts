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
  width: 45%;
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, .25);
  margin: 0 auto;
  text-align: center;
  align-items: center;
  display: flex;
`;

export const Text = styled.p`
  color: rgba(${(props) => props.theme.colors.textColor});
  font-weight: 200;
  width: 100%;
`;
