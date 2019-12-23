import React, { useContext } from "react"
import { Link } from "gatsby"

import { StyledNavItem, StyledDrawerItem } from "./styles"
import { AppContext } from "../../context/AppContext"

const ActiveLink = ({ children, href }) => {
  const { state } = useContext(AppContext)

  if (state.isMobile) {
    return (
      <StyledDrawerItem>
        <Link to={href}>{children}</Link>
      </StyledDrawerItem>
    )
  }
  return (
    <StyledNavItem>
      <Link to={href}>{children}</Link>
    </StyledNavItem>
  )
}

export default ActiveLink
