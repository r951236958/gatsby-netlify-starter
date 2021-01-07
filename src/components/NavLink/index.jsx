import React from "react"
import cn from "classnames"
//import { Link as RouterLink } from "gatsby"
//import { Link as RMDLink } from "@react-md/link"
import { Link } from "gatsby"
import { buttonThemeClassNames } from "@react-md/button"

import styles from "./NavLink.module.scss"

//const NavLink = props => <RMDLink component={RouterLink} {...props} />

const NavLink = ({
  className,
  theme,
  themeType,
  buttonType,
  disabled,
  children,
  ...props
}) => (
  <Link
    {...props}
    className={buttonThemeClassNames({
      disabled,
      theme,
      themeType,
      buttonType,
      className: cn(styles.link, className),
    })}
  >
    {children}
  </Link>
)

export default NavLink
