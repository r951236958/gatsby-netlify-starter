import React from "react"
import { graphql } from "gatsby"
import LinkButton from "../components/LinkButton"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SearchPosts from "../components/SearchPosts"

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        <LinkButton
          theme="primary"
          themeType="contained"
          to="/"
          style={{ marginTop: "85px" }}
        >
          Go Home
        </LinkButton>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
