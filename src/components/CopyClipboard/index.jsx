import React, { useState } from "react"
import { FontIcon, TextIconSpacing } from "@react-md/icon"
import { Button } from "@react-md/button"
import { List, ListItem } from "@react-md/list"
import { Form, TextField } from "@react-md/form"
import { Grid, GridCell } from "@react-md/utils"
import { Text, TextContainer } from "@react-md/typography"

import CopyTooltip from "./CopyTooltip"

import ReactTooltip from "react-tooltip"
import useClipboard from "react-use-clipboard"
import CopyToClipboard from "react-copy-to-clipboard"

import styled from "styled-components"
import styles from "./CopyClipboard.module.scss"

const CopyContainer = styled("div")({
  maxWidth: "360px",
  margin: "5rem auto",
})
const StyledIcon = styled(FontIcon)({
  marginRight: "0.5rem",
})

const CopyClipboard = () => {
  const [copySuccess, setSuccess] = useState(false)
  const [inputValue, setInputValue] = useState({
    value: "",
    valueA: "nick.l@sconsults.net",
    valueB: "nick.l@auxworld.net",
    copied: false,
  })

  const onChange = event => {
    setInputValue(event.target.value)
  }

  const [isCopiedA, setCopiedA] = useClipboard(inputValue.valueA, {
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 2000,
  })
  const [isCopiedB, setCopiedB] = useClipboard(inputValue.valueB, {
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 2000,
  })

  const onCopySusses = () => {
    setSusses({ copySuccess: true })
  }
  return (
    <div className={styles.container}>
      <Form>
        <Grid columns={3} desktopColumns={3} largeDesktopColumns={3}>
          <GridCell colSpan="4">
            <Text type="body-1">Input value: {inputValue.value}</Text>
            <TextField
              value={inputValue.value}
              label="Input Example"
              id="sconsults"
              onChange={onChange}
              className={styles.input}
            />
          </GridCell>
          <CopyContainer>
            <List>
              <ListItem
                id="icon-item-1"
                rightAddon={
                  isCopiedA ? (
                    <StyledIcon>assignment_turned_in</StyledIcon>
                  ) : (
                    <StyledIcon>content_paste</StyledIcon>
                  )
                }
                onClick={setCopiedA}
              >
                ValueA
              </ListItem>
              {isCopiedA && <CopyTooltip />}
            </List>
            <List>
              <Button theme="secondary" onClick={setCopiedB} data-tip="Copied">
                {isCopiedB ? (
                  <>
                    <ReactTooltip />
                    <StyledIcon>assignment_turned_in</StyledIcon>
                  </>
                ) : (
                  <StyledIcon>content_paste</StyledIcon>
                )}
                Copy
              </Button>
            </List>
          </CopyContainer>
        </Grid>
      </Form>
      <TextContainer>
        <div className={styles.pane}>
          <Text className={styles.copyText}>
            This is ValutB: {inputValue.valueB}
          </Text>
          <Button
            buttonType="icon"
            theme="secondary"
            role="button"
            onClick={setCopiedB}
            tabIndex={0}
          >
            <TextIconSpacing
              icon={
                isCopiedB ? (
                  <>
                    <FontIcon>assignment_turned_in</FontIcon>
                    <CopyTooltip />
                  </>
                ) : (
                  <FontIcon>content_paste</FontIcon>
                )
              }
            ></TextIconSpacing>
          </Button>
        </div>
      </TextContainer>
    </div>
  )
}

export default CopyClipboard
