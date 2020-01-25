import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { StyledProjectCard, StyledPostThumbnail, StyledPostContent } from './styles'

const Card = ({ postInfo, src }) => {
  return (
    <StyledProjectCard>
      <StyledPostThumbnail>
        <Link to={`/posts/${postInfo.path}`}>
          <Img fluid={src} alt={postInfo.title} title={postInfo.title} />
        </Link>
      </StyledPostThumbnail>
      <StyledPostContent>
        <Link to={`/posts/${postInfo.path}`}>
          <h3>
            {postInfo.title}
          </h3>
        </Link>
        <p>{postInfo.date}</p>
        <p>{postInfo.description}</p>
      </StyledPostContent>
    </StyledProjectCard>
  )
}

export default Card
