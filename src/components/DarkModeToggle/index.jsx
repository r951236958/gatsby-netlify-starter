import React from "react"
import { Checkbox } from "@react-md/form"
//import { FontIcon } from "@react-md/icon"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import SunnySVGIcon from "./SunnySVGIcon"
import BrightnessSVGIcon from "./BrightnessSVGIcon"

//import styles from "./DarkModeToggle.module.scss"

const DarkModeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Checkbox
          id="dark-mode-toggle"
          name="darkmode-toggle"
          htmlFor="a-toggle"
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
          icon={
            theme === "dark" ? (
              <SunnySVGIcon style={{ color: "var(--darkToggle)" }} />
            ) : (
              <BrightnessSVGIcon style={{ color: "var(--lightToggle)" }} />
            )
          }
          disableIconOverlay
        />
      )}
    </ThemeToggler>
  )
}

export default DarkModeToggle
