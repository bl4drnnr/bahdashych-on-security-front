import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';

export const CodeHighlighterWrapper = styled.div`
  margin-top: 10px;
  & > pre {
    border-radius: 6px;
  }
  span {
    font-family: 'Ubuntu', sans-serif !important;
  }
`;

export const CustomCodeHighlighter = styled(SyntaxHighlighter).attrs(() => ({
  codeTagProps: { style: {
      fontFamily: 'Ubuntu, sans-serif !important',
      lineHeight: '25px'
  } },
}))``;
