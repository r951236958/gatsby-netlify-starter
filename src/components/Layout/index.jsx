import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../../utils/typography"
import Navbar from "../Navbar"
import CodeBlockStyles from "../../components/Code/styles/code-global"
import { AppSizeListener } from "@react-md/utils"
import ScrollTopButton from "../ScrollTopButton"

function Layout({ location, title, children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  const Header = () => {
    if (location.pathname === rootPath || location.pathname === blogPath) {
      return (
        <header>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={location.pathname === blogPath ? `/blog/` : `/`}
            >
              {title}
            </Link>
          </h1>
        </header>
      )
    } else {
      return (
        <header>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/blog/`}
            >
              {title}
            </Link>
          </h3>
        </header>
      )
    }
  }

  return (
    <AppSizeListener>
      <CodeBlockStyles />
      <div
        style={{
          backgroundColor: "var(--bg)",
          color: "var(--textNormal)",
          transition: "color 0.2s ease-out, background 0.2s ease-out",
        }}
      >
        <Wrapper>
          <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
          <div
            style={{
              margin: `2rem auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <Header />
            <main>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
          <ScrollTopButton scrollStepInPx="150" delayInMs="5" />
        </Wrapper>
      </div>
    </AppSizeListener>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
