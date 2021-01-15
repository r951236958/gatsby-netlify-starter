import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import LinkList from "../components/LinkList"

const Bookmarks = ({ location }) => {
  const siteTitle = "常用書籤"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My Favorite" />

      <LinkList />
    </Layout>
  )
}

export default Bookmarks
