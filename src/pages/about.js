//import CopyClipboard from "../components/CopyClipboard"
import { AppSizeListener } from "@react-md/utils"
import React from "react"
import Copy2Clipboard from "../components/Copy2Clipboard"
//import CopyClipboard from "../components/CopyClipboard"
import CustomSelect from "../components/CustomSelect"
import Layout from "../components/Layout"
import ListDemo from "../components/ListDemo"
import SEO from "../components/SEO"

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
