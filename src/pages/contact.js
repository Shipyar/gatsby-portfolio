import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact me!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default contact
