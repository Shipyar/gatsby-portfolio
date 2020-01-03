import React, { useEffect, useRef, useCallback } from 'react'

// Styled Components
import { StyledDrawer, StyledDrawerList } from './styles'

import ActiveLink from './ActiveLink'

const Drawer = ({ menuOpen, handleClickOutside }) => {
  const ref = useRef();

  const handleClick = useCallback(e => {
    if (!menuOpen) return;
    if (ref.current && !ref.current.contains(e.target)) {
      handleClickOutside(e);
    }
  }, [handleClickOutside, menuOpen])

  // Event handler to notice when the user scrolls
  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    } 
  }, [ handleClick])

  return (
    <StyledDrawer ref={ref} menuOpen={menuOpen}>
      <StyledDrawerList>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/projects">Projects</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </StyledDrawerList>
    </StyledDrawer>
  )
}

export default Drawer
