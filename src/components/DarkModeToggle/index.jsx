import React from "react"
import { Checkbox } from "@react-md/form"
import { FontIcon } from "@react-md/icon"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
//import SunnySVGIcon from "./SunnySVGIcon"
//import BrightnessSVGIcon from "./BrightnessSVGIcon"

//import styles from "./DarkModeToggle.module.scss"

const DarkModeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Checkbox
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
          icon={
            theme === "dark" ? (
              <FontIcon aria-label="turn to light">wb_sunny</FontIcon>
            ) : (
              <FontIcon aria-label="turn to dark" theme="primary">
                brightness_4
              </FontIcon>
            )
          }
          disableIconOverlay
        />
      )}
    </ThemeToggler>
  )
}

export default DarkModeToggle
