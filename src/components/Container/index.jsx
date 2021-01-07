import React from "react"
import cn from "classnames"

import styles from "./Container.module.scss"

const Container = ({ className, children, ...props }) => (
  <div {...props} className={cn(styles.container, className)}>
    {children}
  </div>
)

export default Container
