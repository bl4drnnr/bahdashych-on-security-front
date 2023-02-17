import styled from 'styled-components';

export const Container = styled.div`
  min-height: 500px;
  width: 100%;
  padding-top: 30px;
`;

export const Message = styled.p`
  color: rgb(${(props) => props.theme.colors.textColor});
  font-family: 'Charter', sans-serif;
  font-size: 20px;
  padding-top: 30px;
  font-weight: 400;
  display: flex;
  
  &.link {
    .img {
      margin: 0 10px;
      filter: ${(props) => props.theme.colors.svgColor}
    }
  }
  
  &.timestamp {
    font-size: 18px;
    opacity: .5;
  }
`;

export const TimestampWrapper = styled.div`
  justify-content: space-evenly;
  width: 100%;
  display: flex;
`;

export const HrefLink = styled.a`
  font-family: 'Charter', sans-serif;
  color: rgb(${(props) => props.theme.colors.primaryDark});
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;
