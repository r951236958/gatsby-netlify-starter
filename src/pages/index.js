import React from "react"
import LinkButton from "../components/LinkButton"
import ButtonDemo from "../components/ButtonDemo"
import CustomCheckboxDemo from "../components/CustomCheckboxDemo"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
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
        <LinkButton
          marginTop="35px"
          theme="secondary"
          themeType="contained"
          to="/blog/"
        >
          Go to Blog
        </LinkButton>
        <ButtonDemo />
        <CustomCheckboxDemo />
      </Layout>
    )
  }
}

export default IndexPage
