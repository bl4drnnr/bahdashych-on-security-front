import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';

export const CodeHighlighterWrapper = styled.div`
  margin-top: 10px;
  font-family: 'Ubuntu', sans-serif !important;
  & > pre {
    border-radius: 6px;
    background: rgb(${(props) => props.theme.colors.lightBackground}) !important;
  }
  span {
    font-family: 'Ubuntu', sans-serif !important;
    color: rgb(${(props) => props.theme.colors.textColor})
  }
  & .bash {
    font-family: 'Ubuntu', sans-serif !important;
  }
`;

export const CustomCodeHighlighter = styled(SyntaxHighlighter).attrs(() => ({
  codeTagProps: { style: {
      fontFamily: 'Ubuntu, sans-serif !important',
      lineHeight: '25px'
  } },
}))``;
