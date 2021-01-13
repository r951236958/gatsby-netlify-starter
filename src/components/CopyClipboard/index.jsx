import { Button } from "@react-md/button"
import { Form, TextField } from "@react-md/form"
import { FontIcon, TextIconSpacing } from "@react-md/icon"
import { List, ListItem } from "@react-md/list"
import { Text, TextContainer } from "@react-md/typography"
import { Grid, GridCell } from "@react-md/utils"
import React, { useRef, useState } from "react"
import ReactTooltip from "react-tooltip"
import useClipboard from "react-use-clipboard"
import styled from "styled-components"
import styles from "./CopyClipboard.module.scss"
import CopyTooltip from "./CopyTooltip"


const Copied = styled("span")({
  color: "red",
  margin: "auto 1rem",
})



const CopyContainer = styled("div")({
  maxWidth: "360px",
  margin: "5rem auto",
})
const StyledIcon = styled(FontIcon)({
  marginRight: "0.5rem",
})

const CopyClipboard = () => {
  if (typeof window === "undefined") return null
  //const [copySuccess, setSuccess] = useState(false)
  const [value, setValue] = React.useState("")
  const [inputValue, setInputValue] = useState({
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

  

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };
  return (
    <div className={styles.container}>
    {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <Button theme="secondary" buttonType="icon" onClick={copyToClipboard}>
          {isCopied ? (
          <FontIcon>check_box</FontIcon>
        ) : (
          <FontIcon>check_box_outline_blank</FontIcon>
        )}
        </Button> 
        <Copied>{copySuccess}</Copied>
        </div>
      }
      <Form>
        <div>Input Value: {value}</div>
        <TextField
          value={value}
          label="Label"
          placeholder="輸入文字"
          onChange={onChange}
        />
        </Form>
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
