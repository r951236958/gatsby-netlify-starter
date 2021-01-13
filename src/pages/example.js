import { Button } from "@react-md/button"
import { Checkbox, Form, TextField } from "@react-md/form"
import { FontIcon } from "@react-md/icon"
import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import CopyTest from "../components/CopyTest"
import FormSelect from "../components/FormSelect"
import Hr from "../components/Hr"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
//import useClipboard from "../hooks/useClipobard"
import useCopyToClipboard from "../utils/useCopyToClipboard"



const Example = ({ location }) => {
  const siteTitle = "All about Example"
  const [inputValue, setInputValue] = React.useState({
    valueA: "nick.l@sconsults.net",
    valueB: "nick.l@auxworld.net",
  })
  const [copied, setCopied] = React.useState(false)
  const [value, setValue] = React.useState("")
  //const [copyTimeOut, setCopyTimeout] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const onChange = event => {
    setValue(event.target.value)
  }

  const onCopy = () => {
    setCopied(!copied)
  }

  const copyValue = event => {
    setInputValue(event.target.value)
  }

  const [isCopied, handleCopy] = useCopyToClipboard(2000)

  const code = `import React, { useEffect } from "react";

  export default function Code({ code, language }) {
    return (
      <div className="Code">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Test" />
      <FormSelect />
      <Hr />
      <CopyTest />
      <Button
        theme="secondary"
        buttonType="icon"
        onClick={() => handleCopy(code)}
      >
        {isCopied ? (
          <FontIcon>check_box</FontIcon>
        ) : (
          <FontIcon>check_box_outline_blank</FontIcon>
        )}
      </Button>
      <Form>
        <div>Input Value: {value}</div>
        <TextField
          value={value}
          label="Label"
          placeholder="輸入文字"
          onChange={onChange}
        />

        <CopyToClipboard text={inputValue.valueA} onCopy={onCopy}>
          <Button
            theme="secondary"
            buttonType="icon"
            onClick={() => handleCopy(inputValue.valueA)}
          >
            {isCopied ? (
              <FontIcon>assignment_turned_in</FontIcon>
            ) : (
              <FontIcon>content_paste</FontIcon>
            )}
          </Button>
        </CopyToClipboard>
        {copied === true ? <span style={{ color: "red" }}>Copied.</span> : null}
        <div>
          <CopyToClipboard text={inputValue.valueB} onCopy={onCopy}>
            <Button theme="secondary" buttonType="icon">
              {copied === true ? (
                <FontIcon>assignment_turned_in</FontIcon>
              ) : (
                <FontIcon>content_paste</FontIcon>
              )}
            </Button>
          </CopyToClipboard>
        </div>
        <Checkbox
          id="copy-text-checkbox"
          name="copy-to-clipboard"
          checked={onCopy}
          onChange={copyValue}
          icon={<FontIcon>assignment_turned_in</FontIcon>}
          disableIconOverlay
        />
      </Form>
      <div>
        <h1>{count}</h1>
        <Button
          theme="primary"
          themeType="contained"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
      </div>
    </Layout>
  )
}

export default Example
