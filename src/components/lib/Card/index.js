import React from 'react'
import Img from "gatsby-image"

import { StyledProjectCard } from './styles'

const Card = ({ src, alt, imageSize, title }) => {
  return (
    <StyledProjectCard>
      <Img fluid={src} />
      <h1>{title}</h1>
    </StyledProjectCard>
  )
}

export default Card
