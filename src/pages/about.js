import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import CustomSelect from "../components/CustomSelect"
import Copy2Clipboard from "../components/Copy2Clipboard"
import ListDemo from "../components/ListDemo"

const About = ({ location }) => {
  const siteTitle = "All about Example"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Components Test" />
      <div className="grid">
        <Copy2Clipboard />

        <CustomSelect />
        <ListDemo />
      </div>
    </Layout>
  )
}

export default About
