import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import CopyClipboard from "../components/CopyClipboard"

const Example = ({ location }) => {
  const siteTitle = "All about Example"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Test" />

      <CopyClipboard />
    </Layout>
  )
}

export default Example
