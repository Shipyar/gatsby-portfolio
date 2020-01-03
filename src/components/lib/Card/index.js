import React from 'react'
import Img from "gatsby-image"

import { StyledProjectCard } from './styles'

const Card = ({ src, alt, title }) => {
  return (
    <StyledProjectCard>
      <Img fluid={src} alt={alt} title={title}/>
      <h1>{title}</h1>
    </StyledProjectCard>
  )
}

export default Card
