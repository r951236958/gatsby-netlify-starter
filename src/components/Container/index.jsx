import React from "react"
import cn from "classnames"

import styles from "./Container.module.scss"

const Container = ({ className, children, stacked, ...props }) => (
  <div
    {...props}
    className={cn(
      styles.container,
      {
        [styles.stacked]: stacked,
      },
      className
    )}
  >
    {children}
  </div>
)

Container.defaultProps = {
  stacked: false,
}

export default Container
