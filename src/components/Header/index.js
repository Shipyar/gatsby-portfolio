import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import { AppContext } from "../../context/AppContext"
import { StyledHeader } from "./styles"

import Burger from "../lib/Burger"
import NavigationLinks from "./NavigationLinks"
import Drawer from "./Drawer"

const Header = () => {
  const { state, setMenuOpen } = useContext(AppContext)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll handler function
  const handleWindowScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  // Event handler to notice when the user scrolls
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll)

    return () => window.removeEventListener("scroll", handleWindowScroll)
  }, [handleWindowScroll])

  return (
    <StyledHeader className={`${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/">Oliver Abraham</Link>
        {!state.isMobile && <NavigationLinks />}
        {state.isMobile && (
          <Burger onClick={e => setMenuOpen(e)} menuOpen={state.menuOpen} />
        )}
        {state.isMobile && (
          <Drawer menuOpen={state.menuOpen} aria-expanded={state.menuOpen} />
        )}
      </div>
    </StyledHeader>
  )
}

export default Header
