import React from 'react'

import { StyledSection, StyledSectionChildren } from './styles'

const Section = ({ children, position }) => {
  return (
    <StyledSection>
      <StyledSectionChildren position={position}>
        {children}
      </StyledSectionChildren>
    </StyledSection> 
  )
}

export default Section
