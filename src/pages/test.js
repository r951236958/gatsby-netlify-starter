import React from "react"
import Layout from "../components/Layout"
import ReactClipboardDemo from "../components/ReactClipboardDemo"
import SEO from "../components/SEO"

const Test = ({ location }) => {
  const siteTitle = "All about Test"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Test" />
      <ReactClipboardDemo />
    </Layout>
  )
}

export default Test
