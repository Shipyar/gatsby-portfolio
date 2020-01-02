import React, { useContext } from 'react'
import { Link, navigate } from 'gatsby'

import { StyledNavItem, StyledDrawerItem } from './styles'
import { AppContext } from '../../context/AppContext'

const ActiveLink = ({ children, href }) => {
  const { isMobile, setMenuOpen } = useContext(AppContext)

  const handleMobileLinkRedirect = e => {
    setMenuOpen(e)
    navigate(href)
  }

  if (isMobile) {
    return (
      <StyledDrawerItem>
        <a onClick={e => handleMobileLinkRedirect(e)}>{children}</a>
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
