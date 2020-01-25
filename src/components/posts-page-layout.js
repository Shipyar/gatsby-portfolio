import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

import SEO from './seo'
import Section from './lib/Section'
import Layout from './Layout'
import MDXProvider from './mdx/MdxProvider'

const PostTitle = styled.h1`
  text-align: center;
`

export default function BlogPost({ data: { mdx } }) {
  return (
    <MDXProvider>
      <Layout>
        <Section>
          <SEO
            type="article"
            title={mdx.frontmatter.title}
            description={mdx.frontmatter.descriptions}
            keywords={mdx.frontmatter.keywords}
          />
          <PostTitle>{mdx.frontmatter.title}</PostTitle>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Section>
      </Layout>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
