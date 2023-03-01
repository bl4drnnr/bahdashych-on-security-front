import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const ButtonContent = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: rgb(${(props) => props.theme.colors.textColor});
  padding: 0 5px;
`;

export const BasicButtonBox = styled.button`
  height: 36px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgba(${(props) => props.theme.colors.textColor}, .3);
  background-color: rgba(${(props) => props.theme.colors.darkBackground});
  transition: .3s;

  &:hover, &.active {
    border: 1px solid rgba(${(props) => props.theme.colors.primaryLight}, 1);
    background-color: rgba(${(props) => props.theme.colors.primaryLight}, .20);
  }
`;
