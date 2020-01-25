import React, { useContext } from 'react'

import ThemeContext from '../../context/ThemeContext'

import { StyledFooter, StyledCopyright, StyledCiting } from './styles'

const Footer = () => {
  const { toggleDark } = useContext(ThemeContext)

  return (
    <StyledFooter>
      <StyledCopyright>
        © {new Date().getFullYear()} Oliver Abraham
      </StyledCopyright>
      <StyledCiting>
        Website made with React, Gatsby, and &nbsp;
        <span style={{textDecoration: 'underline', cursor: 'pointer'}} role="button" onClick={toggleDark}>Styled Components.</span>
      </StyledCiting>
      <StyledCiting>
        Hosted on&nbsp;<a href="https://zeit.co/now">Now</a>.
      </StyledCiting>
    </StyledFooter>
  )
}

export default Footer
