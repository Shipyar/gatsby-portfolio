import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Card from '../lib/Card'

const PostList = () => {
  const data = useStaticQuery(graphql`
    query allPosts {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              description
              date(formatString: "MMMM D, YYYY")
              category
              path
              image {
                childImageSharp {
                  fluid(maxWidth: 786, quality: 95) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(data);

  return (
    <>
      {data.allMdx.edges.map(({ node }, index) => (
        <Card
          key={node.id}
          postInfo={node.frontmatter}
          src={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
    </>
  )
}

export default PostList
