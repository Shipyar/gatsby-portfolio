import React, { useContext, useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import { AppContext } from '../../context/AppContext'
import { StyledHeader } from './styles'

import Burger from '../lib/Burger'
import NavigationLinks from './NavigationLinks'
import Drawer from './Drawer'

const Header = () => {
  const { isMobile, menuOpen, setMenuOpen } = useContext(AppContext)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll handler function
  const handleWindowScroll = useCallback(e => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }, [])

  // Event handler to notice when the user scrolls
  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)

    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [handleWindowScroll])

  return (
    <StyledHeader className={`${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/">O<span>Abraham</span></Link>
        {!isMobile && <NavigationLinks />}
        {isMobile && (
          <Burger onClick={e => setMenuOpen(e)} menuOpen={menuOpen} />
        )}
        {isMobile && <Drawer menuOpen={menuOpen} aria-expanded={menuOpen} />}
      </div>
    </StyledHeader>
  )
}

export default Header
