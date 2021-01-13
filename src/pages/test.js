import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import List from "../components/ConfigurableDemo"

const Test = ({ location }) => {
  const siteTitle = "Hi"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="I'm Test" />

      <List />
    </Layout>
  )
}

export default Test
