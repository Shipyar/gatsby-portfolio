import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Theme from './Theme';

const Code = ({ children, language, className, ...props }) => (
  <SyntaxHighlighter
    {...props}
    language={language || (className && className.replace('language-', ''))}
    style={Theme}
  >
    {children}
  </SyntaxHighlighter>
)

export default Code