import React from 'react'

import { StyledProjectCard } from './styles'

const Card = ({ src, alt, imageSize, title }) => {
  return (
    <StyledProjectCard>
      <img src={src} alt={alt} />
      <h1>{title}</h1>
    </StyledProjectCard>
  )
}

export default Card
