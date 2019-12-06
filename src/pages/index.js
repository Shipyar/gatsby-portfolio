import React from "react"

import Container from '../components/lib/Container';
import Hero from '../components/lib/Hero';
import Code from '../components/lib/Code';
import Layout from '../components/Layout'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Hero 
        heading="Lorem"
        subheading="Highly proficient in fully responsive design and a strong passion for clean, maintainable code that scales.">
        <Code 
          lines={[
            'welcome to my website',
            'a bit about me',
            'i\'m passionate about learning',
            'i love to code ❤️',
            'i love to run 👟',
            'i enjoy helping others',
            'staying physically active',
            'exploring the world',
          ]}
        />
      </Hero>
    </Container>
  </Layout>
);

export default IndexPage;
