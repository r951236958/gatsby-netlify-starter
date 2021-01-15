import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
////import { GlobalStyles, theme } from "../../utils/styles-global"
//import UseTheme from "../../hooks/use-theme"
import { rhythm, scale } from "../../utils/typography"
import Navbar from "../Navbar"
import Footer from "../Footer"
import BSFooter from "../BSFooter"
import Container from "react-bootstrap/Container"
import CodeBlockStyles from "../../utils/code-global"
import { AppSizeListener } from "@react-md/utils"
import ScrollTopButton from "../ScrollTopButton"

function Layout({ location, title, children }) {
  //const setTheme = UseTheme()

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
        <div>
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
        </div>
      )
    } else {
      return (
        <div>
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
        </div>
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
            <Container>
              <Header />
              <main>{children}</main>
            </Container>
          </div>
          <BSFooter />
          <ScrollTopButton scrollStepInPx="150" delayInMs="5" />
        </Wrapper>
      </div>
    </AppSizeListener>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
