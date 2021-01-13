import React from "react"
import { Button as RMDButton } from "@react-md/button"

const Button = () => {
  return (
    <>
      <RMDButton theme="clear" themeType="contained">
        {...props}
      </RMDButton>
    </>
  )
}

export default Button
