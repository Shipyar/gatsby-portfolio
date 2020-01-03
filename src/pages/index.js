import React from 'react'

import Container from '../components/lib/Container'
import Section from '../components/lib/Section'
import Hero from '../components/lib/Hero'
import Code from '../components/lib/Code'
import About from '../components/About';
import Layout from '../components/Layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Hero
        heading="Oliver Abraham"
        subheading="Highly proficient in fully responsive design and a strong passion for clean, maintainable code that scales."
      >
        <Code
          lines={[
            '<Welcome',
            "   intrests={[ 'running', 'cooking' ]}",
            "   favourites={[ 'react', 'redux' ,'styled-components' ]}",
            "   languages={['javascript', 'python']}",
            '/>',
          ]}
        />
      </Hero>
      <Section
        position="start"
      >
        <About />
      </Section>
    </Container>
  </Layout>
)

export default IndexPage
