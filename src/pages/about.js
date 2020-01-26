import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/lib/Container'
import SEO from '../components/seo'

const StyledAboutPage = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  color: ${props => props.theme.colors.text.paragraph};
  ${props => props.theme.mediaQuery.tablet`
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    text-align: center;
  `};
`

const StyledAboutContent = styled.div`
  display: grid;
  padding-right: 1rem;
  p {
    line-height: 1.8;
  }
  ${props => props.theme.mediaQuery.tablet`
    padding: 1.2rem;
  `};
`

const StyledLinkList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  justify-content: center;
  transition: all 0.35s ease-in-out;
  & li {
    & a {
      padding: 10px;
      font-weight: bold;
    }
  }
`

const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" keywords={['Oliver Abraham', 'about']} />
      <Container>
        <StyledAboutPage>
          <StyledAboutContent>
            <h1>About Me</h1>
            <p>
              Hey my Names Oliver Abraham I'm a 26 year old Front end Developer, I
              love building new creative applications.
              I'm also a big fan of running / trail running and hoping this year to start my
              first marathon. I love being in the outdoors and exploring nature. I love working with react, redux and react native.
            </p>
            <StyledLinkList>
              <li>
                <a href="https://twitter.com/ShipyardOA">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/oliver-abraham-ba648a84/">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/Shipyar">Github</a>
              </li>
              <li>
                <a href="mailto:hey@oliverabraham.co.uk">Email</a>
              </li>
            </StyledLinkList>
          </StyledAboutContent>
          <Img fluid={data.portrait.childImageSharp.fluid} alt="" />
        </StyledAboutPage>
      </Container>
    </Layout>
  )
}

export default about

export const query = graphql`
  query {
    portrait: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
