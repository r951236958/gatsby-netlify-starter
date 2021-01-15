import React from "react"
import styled from "styled-components"
import { Link } from "@react-md/link"

const StyledFooter = styled.footer`
  text-align: center;
  margin: 24px;
`
const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link href="https://www.gatsbyjs.org">Gatsby</Link>
    </StyledFooter>
  )
}

export default Footer
