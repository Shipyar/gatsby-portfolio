import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

const Code = ({ children, language, className, ...props }) => (
  <SyntaxHighlighter
    {...props}
    language={language}
    style={docco}
  >
    {children}
  </SyntaxHighlighter>
)

export default Code