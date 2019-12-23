import React from "react"

import {
  StyledHero,
  StyledHeroHeading,
  StyledHeroSubheading,
  StyledHeroChildren,
} from "./styles"

const Hero = ({ heading, subheading, children }) => {
  return (
    <StyledHero>
      <StyledHeroHeading>{heading}</StyledHeroHeading>
      <StyledHeroSubheading>{subheading}</StyledHeroSubheading>
      <StyledHeroChildren>{children}</StyledHeroChildren>
    </StyledHero>
  )
}

export default Hero
