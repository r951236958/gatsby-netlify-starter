import React from "react"
import LinkList from "../components/LinkList"
import Link from "../components/Link"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ location }) => {
  const siteTitle = "Gatsby Starter Personal Website"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
      <h1>
        Hey people{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>Welcome to your new Gatsby website. You are on your home page.</p>
      <p>
        This starter comes out of the box with styled components and Gatsby's
        default starter blog running on Netlify CMS.
      </p>
      <p>Now go build something great!</p>
      <Link
        theme="secondary"
        themeType="contained"
        to="/blog/"
        style={{ marginTop: "85px" }}
      >
        Go to Blog
      </Link>
      <LinkList />
    </Layout>
  )
}

export default IndexPage
