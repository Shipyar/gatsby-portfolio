import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'
import AppProvider from './src/context/AppContext'
import styled from 'styled-components'
import { MDXProvider } from "@mdx-js/react"

import Code from './src/components/mdx/Code'

const StyledP = styled.p`
  line-height: 1.8;
  color: ${props => props.theme.colors.text.paragraph};
`

const StyledH1 = styled.h1`
  color: ${props => props.theme.colors.text.heading};
`;

const StyledH2 = styled.h2`
  color: ${props => props.theme.colors.text.heading};
`;

const StyledH3 = styled.h3`
  color: ${props => props.theme.colors.text.heading};
`;

const components = {
  pre: props => <div {...props} />,
  code: Code,
  p: StyledP,
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <AppProvider>
      <MDXProvider components={components}>
        {element}
      </MDXProvider>
    </AppProvider>
  </ThemeProvider>
)
