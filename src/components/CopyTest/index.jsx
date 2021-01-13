import React, { useState } from "react"
import ReactClipboard from "react-clipboardjs-copy"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ReactTooltip from "react-tooltip"
import { Button } from "./Button"
import { Form, Checkbox, TextField } from "@react-md/form"
import { FontIcon } from "@react-md/icon"
//import { Button } from "@react-md/button"
import styled from "styled-components"

const Copied = styled("span")({
  color: "red",
  margin: "auto 1rem",
})

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const BoxSpace = styled("div")({
  padding: "10px 0",
  height: "50px",
  textAlign: "center",
})

const Box = styled("div")({
  transform: "translate3d(5px, 5px, 5px)",
  width: "50%",
  float: "left",
  boxSizing: "border-box",
})

const Face = styled("a")({
  margin: "1rem auto",
})

const CopyTest = () => {
  if (typeof window === "undefined") return null
  const [copied, setCopied] = useState(false)
  const [copyValue, setCopyValue] = useState({
    valueA: "A",
    valueB: "B",
  })

  const onChange = e => {
    setCopyValue(e.target.value)
  }

  return (
    <div className="test">
      <BoxSpace>
        <Box data-tip data-for="happyFace">
          <Face>d(`･∀･)b</Face>
        </Box>
        <ReactTooltip id="happyFace" type="error">
          <span>Show happy face</span>
        </ReactTooltip>
        <Box data-tip data-for="sadFace">
          <Face>இдஇ</Face>
        </Box>
        <ReactTooltip id="sadFace" type="warning" effect="solid">
          <span>Show sad face</span>
        </ReactTooltip>
      </BoxSpace>
      <BoxSpace>
        <Box>Copy Value {copyValue.valueA}</Box>
        <CopyToClipboard text={copyValue.valueA} onCopy={() => setCopied(true)}>
          <Button
            theme="secondary"
            themeType="outline"
            {...(copied && `{data-tip data-for="copySusses"}`)}
          >
            Copy
          </Button>
        </CopyToClipboard>
        {copied ? (
          <ReactTooltip id="copySusses" effect="solid">
            <span>Copied!</span>
          </ReactTooltip>
        ) : null}
      </BoxSpace>
      <section className="app-item">
        <div className="app-item-desc">copy text</div>
        <ReactClipboard
          text="copy text"
          onSuccess={e => console.log(e)}
          onError={e => console.log(e)}
        >
          <Button>Copy</Button>
        </ReactClipboard>
      </section>
      <section className="app-item">
        <div className="app-item-desc">
          copy element attr value: aria-label='this is an element attr
          aria-label'
        </div>
        <ReactClipboard
          options={{
            text: trigger => {
              return trigger.getAttribute("aria-label")
            },
          }}
          aria-label="this is an element attr aria-label"
        >
          <Button>Copy</Button>
        </ReactClipboard>
      </section>

      <section className="app-item">
        <div className="app-item-desc">
          changes the focus you'll want to set the focused element as the
          container value
        </div>
        <ReactClipboard
          options={{ container: document.getElementById("modal") }}
        >
          <Button>Copy</Button>
        </ReactClipboard>
      </section>

      <section className="app-item">
        <div className="app-item-desc">
          <div></div>
          <div id="dynamically_id">
            this is a dynamically target element, click copy button
          </div>
        </div>
        <ReactClipboard
          options={{
            target: trigger => {
              return document.getElementById("dynamically_id")
            },
          }}
        >
          <Button>Copy</Button>
        </ReactClipboard>
      </section>
    </div>
  )
}

export default CopyTest
