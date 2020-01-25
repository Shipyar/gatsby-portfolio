import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/lib/Container'
import Section from '../components/lib/Section'
import Grid from '../components/lib/Grid'
import Hero from '../components/lib/Hero'
import PostList from '../components/PostList';
import SEO from '../components/seo'

const Posts = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Posts"
        useTitleTemplate
        keywords={[
          'Oliver Abraham',
          'developer',
          'technology',
          'javascript',
          'react',
          'programming',
          'blog',
        ]}
      />

      <Container>
        <Hero subheading="My blog posts" />
        <Section>
          <Grid>
            <PostList />
          </Grid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts

