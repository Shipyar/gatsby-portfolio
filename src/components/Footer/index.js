import React, { useContext } from "react"

import ThemeContext from "../../context/ThemeContext"

import { StyledFooter, StyledCopyright, StyledCiting } from "./styles"

const Footer = () => {
  const { dark, toggleDark } = useContext(ThemeContext)

  return (
    <StyledFooter>
      <StyledCopyright>
        © {new Date().getFullYear()} Oliver Abraham
      </StyledCopyright>
      <StyledCiting>
        Website made with React, Gatsby, and Styled Components.
      </StyledCiting>
      <StyledCiting>
        Hosted on&nbsp;<a href="https://zeit.co/now">Now</a>.
        <button onClick={toggleDark}>
          {dark ? <span>ss</span> : <span>tt</span>}
        </button>
      </StyledCiting>
    </StyledFooter>
  )
}

export default Footer
