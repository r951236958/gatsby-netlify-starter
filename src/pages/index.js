import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HomePage from "../components/HomePage"
import CopyTest from "../components/CopyTest"

const IndexPage = ({ location }) => {
  const siteTitle = "Gatsby Starter Personal Website"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <HomePage />
      <CopyTest />
    </Layout>
  )
}

export default IndexPage
