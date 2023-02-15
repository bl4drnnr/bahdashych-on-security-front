import styled from 'styled-components';

export const Container = styled.div`
  min-height: 500px;
  width: 100%;
  padding-top: 30px;
`;

export const Message = styled.p`
  font-family: 'Charter', sans-serif;
  font-size: 20px;
  padding-top: 30px;
  font-weight: 400;
  display: flex;
  
  &.link {
    color: rgb(${(props) => props.theme.colors.primaryDark});
    text-decoration: underline;
    :hover {
      cursor: pointer;
    }
    
    .img {
      margin: 0 10px;
    }
  }
`;
