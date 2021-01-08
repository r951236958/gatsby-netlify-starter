import React from "react"
import cn from "classnames"
//import { Link as RouterLink } from "gatsby"
//import { Link as RMDLink } from "@react-md/link"
import { Link as RouterLink } from "gatsby"
import { buttonThemeClassNames } from "@react-md/button"

import styles from "./Link.module.scss"

//const NavLink = props => <RMDLink component={RouterLink} {...props} />

const Link = ({
  className,
  theme,
  themeType,
  buttonType,
  disabled,
  children,
  ...props
}) => (
  <RouterLink
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
  </RouterLink>
)

export default Link
