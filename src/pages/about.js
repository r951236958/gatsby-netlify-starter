import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import CustomSelect from "../components/CustomSelect"
import Copy2Clipboard from "../components/Copy2Clipboard"
import ListDemo from "../components/ListDemo"
//import CopyClipboard from "../components/CopyClipboard"
import { AppSizeListener } from "@react-md/utils"

const About = ({ location }) => {
  const siteTitle = "About Page"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="What's About" />
      <AppSizeListener>
        <div className="grid">
          <Copy2Clipboard />

          <CustomSelect />
          <ListDemo />
        </div>
      </AppSizeListener>
    </Layout>
  )
}

export default About
