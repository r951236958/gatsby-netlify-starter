import React from "react"
import cn from "classnames"
import { Link } from "gatsby"
import { buttonThemeClassNames } from "@react-md/button"

import styles from "./WithButtonStyles.module.scss"

const LinkButton = ({
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

export default LinkButton
