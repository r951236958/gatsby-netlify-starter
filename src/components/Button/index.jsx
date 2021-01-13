import React from "react"

import "./styles.scss"

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`${className || ""} btn-custom`}
      {...otherProps}
      style={{
        backgroundColor: "var(--btn-bg)",
        borderColor: "var(--btn-border)",
        color: "var(--btnText)",
      }}
    >
      {children}
    </button>
  )
}

export default Button
