import React from 'react'
import styled from 'styled-components'

import { MDXProvider } from '@mdx-js/tag'

import Code from './Code'

const StyledP = styled.p`
  line-height: 1.8;
`

const components = {
  code: Code,
  p: StyledP,
}

export default props => <MDXProvider {...props} components={components} />
