import React from 'react'

// Styled Components
import { StyledDrawer, StyledDrawerList } from './styles'

import ActiveLink from './ActiveLink'

const Drawer = ({ menuOpen }) => {
  return (
    <StyledDrawer menuOpen={menuOpen}>
      <StyledDrawerList>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/projects">Projects</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </StyledDrawerList>
    </StyledDrawer>
  )
}

export default Drawer
