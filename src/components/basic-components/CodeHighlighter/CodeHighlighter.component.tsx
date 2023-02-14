import React from 'react';

import { CodeHighlighterProps } from '@components/CodeHighlighter/CodeHighlighter.interface';
import {
  CodeHighlighterWrapper,
  CustomCodeHighlighter
} from '@styles/CodeHighlighter.style';

const CodeHighlighter = ({ code, language }: CodeHighlighterProps) => {
  return (
    <CodeHighlighterWrapper>
      <CustomCodeHighlighter
        language={language}
      >
        {code}
      </CustomCodeHighlighter>
    </CodeHighlighterWrapper>
  );
};

export default CodeHighlighter;
