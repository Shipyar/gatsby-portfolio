import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import { StyledProjectCard } from './styles'

const Card = ({ postInfo, src }) => {
  return (
    <StyledProjectCard>
      <Img fluid={src} alt={'test'} title={postInfo.title}/>
      <Link to={`/posts/${postInfo.path}`}>
        {postInfo.title}
      </Link>
    </StyledProjectCard>
  )
}

export default Card
