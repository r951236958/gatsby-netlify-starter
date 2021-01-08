import React from "react"
import { Text } from "@react-md/typography"
import { Button } from "@react-md/button"
import { FontIcon } from "@react-md/icon"
import styled from "styled-components"
import CopyToClipboard from "@uxui/copy-to-clipboard-react"

const Pane = styled("div")({
  padding: "1rem 2rem 1rem 1rem",
  backgroundColor: "var(--bg)",
  borderRadius: "5px",
  border: "1px solid var(--border-color)",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  fontFamily: "sans-serif",
  fontSize: "16px",
})

const Container = styled("div")({
  maxWidth: "360px",
  margin: "100px auto",
})

const Tooltip = styled("div")({
  backgroundColor: "#111111",
  color: "#ffffff",
  position: "absolute",
  top: "-25px",
  right: "-10px",
  fontWeight: 600,
  fontSize: "12px",
  padding: "4px 5px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    border: "5px solid transparent",
    borderTopColor: "#111111",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
  },
})

const Copy2Clipboard = () => {
  const content = "https://codesandbox.io/s/lrpwj3rj29"
  return (
    <>
      <CopyToClipboard>
        {({ copy, copied, turnOffCopied }) => {
          const handleCopy = e => {
            if (content && !copied) {
              copy(content)
              setTimeout(() => {
                turnOffCopied()
              }, 1000)
            }
          }

          const copyOnClick = e => {
            e.preventDefault()
            handleCopy()
          }

          const copyOnKeyPress = e => {
            if (e.key === "Enter" || e.key === " ") {
              handleCopy()
            }
          }

          return (
            <Container>
              <Pane>
                <Text type="body-1" style={{ margin: "auto 0.5rem" }}>
                  {content}
                </Text>
                <Button
                  buttonType="icon"
                  theme="clear"
                  role="button"
                  onClick={copyOnClick}
                  tabIndex={0}
                  onKeyDown={copyOnKeyPress}
                >
                  <FontIcon>content_paste</FontIcon>
                  {copied && (
                    <Tooltip
                      role="tooltip"
                      aria-describedby="copied ETH address!"
                    >
                      Copied
                    </Tooltip>
                  )}
                </Button>
              </Pane>
            </Container>
          )
        }}
      </CopyToClipboard>
    </>
  )
}

export default Copy2Clipboard
