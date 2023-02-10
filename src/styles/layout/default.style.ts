import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(${(props) => props.theme.colors.darkBackground});
`;

export const MainBox = styled.div`
  margin-top: 65px;
`;
