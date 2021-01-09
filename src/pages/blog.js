import { graphql } from "gatsby"
import React from "react"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Link from "../components/Link"
import SearchPosts from "../components/SearchPosts"
import SEO from "../components/SEO"

const Blog = ({ data, navigate, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const localSearchBlog = data.localSearchBlog

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <SearchPosts
        posts={posts}
        localSearchBlog={localSearchBlog}
        navigate={navigate}
        location={location}
      />
      <Link
        theme="primary"
        themeType="contained"
        to="/"
        style={{ marginTop: "85px" }}
      >
        Go Home
      </Link>
    </Layout>
  )
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
