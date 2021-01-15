import React from "react"
//import { Link as RMDLink } from "@react-md/link"
import { MenuItemLink as RMDLink } from "@react-md/menu"
import { Link as RouterLink } from "gatsby"

const Link = ({
  children,
  shallow,
  scroll,
  replace,
  to,
  passHref,
  ...props
}) => {
  if (to.startsWith("http")) {
    return (
      <RMDLink {...props} href={to}>
        {children}
      </RMDLink>
    )
  }
  const Link = props => <RMDLink {...props} component={RouterLink} />
  return (
    <RouterLink
      {...props}
      shallow={shallow}
      scroll={scroll}
      replace={replace}
      to={to}
      passHref={passHref}
    >
      {children}
    </RouterLink>
  )
}

Link.defaultProps = {
  passHref: true,
}

export default Link
