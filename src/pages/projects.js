import React from 'react'

import { graphql } from "gatsby"

import Layout from '../components/Layout'
import Container from '../components/lib/Container'
import Section from '../components/lib/Section'
import Grid from '../components/lib/Grid'
import Hero from '../components/lib/Hero'
import Card from '../components/lib/Card'
import SEO from '../components/seo'

const Projects = ({ data }) => {
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
              src={data.gulfstream.childImageSharp.fluid}
              alt="test"
              title="Gulfstream"
            />
            <Card
              src={data.gulfstream.childImageSharp.fluid}
              alt="test"
              title="Gulfstream"
            />
          </Grid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    gulfstream: file(relativePath: { eq: "gulf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
