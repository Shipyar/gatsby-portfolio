import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/lib/Container'
import Section from '../components/lib/Section'
import Grid from '../components/lib/Grid'
import Hero from '../components/lib/Hero'
import Card from '../components/lib/Card'
import SEO from '../components/seo'

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <Hero
          heading="My Projects"
          subheading="Here are some projects I've had the please of working closely on"
        />
        <Section>
          <Grid>
            <Card
              src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="test"
              title="Gulfstream"
            />
            <Card
              src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="test"
              title="Slipstream"
            />
          </Grid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects
