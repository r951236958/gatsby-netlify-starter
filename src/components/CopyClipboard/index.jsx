import React from "react"
import { FontIcon } from "@react-md/icon"
import { Button } from "@react-md/button"
import { TextField } from "@react-md/form"
import CopyToClipboard from "react-copy-to-clipboard"
import { Grid, GridCell } from "@react-md/utils"

import styles from "./CopyClipboard.module.scss"

const CopyClipboard = () => {
  const [copied, setCopied] = React.useState(false)

  const handleClick = () => {
    setCopied(isCopied => !isCopied)
  }

  const [value, setValue] = React.useState({
    sconsults: "nick.l@sconsults.net",
    auxworld: "nick.l@auxworld.net",
  })
  //const [sconsults, setSconsults] = React.useState("")
  //const [auxworld, setAuxworld] = React.useState("")

  const updateField = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }
  const isCopied = React.useRef(copied)

  React.useEffect(() => {
    if (isCopied.current === true && copied === false) {
      setCopied(false)
    }

    isCopied.current = copied
  }, [copied])

  return (
    <>
      <Grid columns={1} desktopColumns={3} largeDesktopColumns={3}>
        <GridCell colSpan="2">
          <TextField
            placeholder="sconsults"
            label="Test"
            value={value.sconsults}
            name="sconsults"
            onChange={updateField}
            className={styles.input}
          />
        </GridCell>
        <GridCell colSpan="1">
          <CopyToClipboard text={value.sconsults} onCopy={handleClick}>
            <Button theme="secondary" buttonType="icon">
              {copied === true ? (
                <FontIcon>assignment_turned_in</FontIcon>
              ) : (
                <FontIcon>content_paste</FontIcon>
              )}
            </Button>
          </CopyToClipboard>
        </GridCell>
        <GridCell colSpan="2">
          <TextField
            placeholder="auxworld"
            label="Test"
            value={value.auxworld}
            name="auxworld"
            onChange={updateField}
            className={styles.input}
          />
        </GridCell>
        <GridCell colSpan="1">
          <CopyToClipboard text={value.auxworld} onCopy={handleClick}>
            <Button theme="secondary" buttonType="icon">
              {copied === true ? (
                <FontIcon>assignment_turned_in</FontIcon>
              ) : (
                <FontIcon>content_paste</FontIcon>
              )}
            </Button>
          </CopyToClipboard>
        </GridCell>
      </Grid>
    </>
  )
}

export default CopyClipboard
