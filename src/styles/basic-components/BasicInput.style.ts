import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const InputField = styled.input`
  background-color: rgba(${(props) => props.theme.colors.darkBackground});
  border: 1px solid rgba(${(props) => props.theme.colors.textColor}, .3);
  border-radius: 5px;
  outline: none;
  padding: 0 16px 0 16px;
  width: 100%;
  box-sizing: border-box;
  height: 36px;
  font-size: 16px;
  line-height: 24px;
  transition: .3s;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-weight: 100;
  
  &:focus {
    border: 1px solid rgba(${(props) => props.theme.colors.primaryDark}, .6);
  }

  &:hover {
    border: 1px solid rgba(${(props) => props.theme.colors.primaryDark}, .6);
  }

  &.en {
    font-family: 'Charter', sans-serif;
  }
  &.non-en {
    font-family: 'Crimson', serif;
  }
`;

export const Placeholder = styled.p`
  opacity: .9;
  font-size: 14px;
  margin: 10px 0;
  color: rgb(${(props) => props.theme.colors.textColor});
  font-weight: 200;
`;
