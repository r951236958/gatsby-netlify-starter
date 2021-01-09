import Highlight, { defaultProps } from "prism-react-renderer"
import Prism from "prismjs"
import PrismTheme from "prismjs/themes/prism-okaidia.css"
import React from "react"
import Layout from "../components/Layout"
import Link from "../components/Link"
import LinkList from "../components/LinkList"
import SEO from "../components/SEO"

const IndexPage = ({ location }) => {
  const siteTitle = "Gatsby Starter Personal Website"

  const code = `import React, { useEffect } from "react";

  export default function Code({ code, language }) {
    return (
      <div className="Code">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );`

  React.useEffect(() => {
    Prism.highlightAll()
  })

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
      <Highlight
        Prism={Prism}
        theme={PrismTheme}
        {...defaultProps}
        code={code}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={PrismTheme}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      ,
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
