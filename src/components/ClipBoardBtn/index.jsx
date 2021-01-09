import React from "react"
import { Checkbox } from "@react-md/form"
import { FontIcon } from "@react-md/icon"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const ClipBoardBtn = () => {
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
            copied === true ? (
              <FontIcon>assignment_turned_in</FontIcon>
            ) : (
              <FontIcon>content_paste</FontIcon>
            )
          }
          disableIconOverlay
        />
      )}
    </ThemeToggler>
  )
}

export default ClipBoardBtn
