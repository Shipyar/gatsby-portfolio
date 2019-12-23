import React from "react"

import Container from "../components/lib/Container"
import Hero from "../components/lib/Hero"
import Code from "../components/lib/Code"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Hero
        heading="Lorem"
        subheading="Highly proficient in fully responsive design and a strong passion for clean, maintainable code that scales."
      >
        <Code
          lines={[
            "<Welcome",
            "   intrests={[ 'running', 'cooking' ]}",
            "   favourites={[ 'react', 'redux' ,'styled-components' ]}",
            "/>",
          ]}
        />
        <div></div>
      </Hero>
    </Container>
  </Layout>
)

export default IndexPage
