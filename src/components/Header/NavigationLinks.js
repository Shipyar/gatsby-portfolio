import React from "react"

import ActiveLink from "./ActiveLink"

import { StyledNav, StyledNavList } from "./styles"

const NavigationLinks = () => {
  return (
    <StyledNav>
      <StyledNavList>
        <ActiveLink href="/projects">Projects</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </StyledNavList>
    </StyledNav>
  )
}

export default NavigationLinks
