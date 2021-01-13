import React, { useRef, useState } from "react"
import { Button } from "@react-md/button"
import { Form, Checkbox, TextField } from "@react-md/form"
import { FontIcon } from "@react-md/icon"
import ReactTooltip from "react-tooltip"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default function CopyExample() {
  const [copied, setCopied] = useState(false)
  const copyValue = `import React, { useEffect } from "react";

  export default function Code({ code, language }) {
    return (
      <div className="Code">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );`

  const onChange = () => {}

  return (
    <>
      <div>Copy Value: {copyValue}</div>
      <CopyToClipboard text={copyValue} onCopy={() => setCopied(true)}>
        {copied ? (
          <Button theme="error" themeType="contained" data-tip="Copied">
            <ReactTooltip /> Copied
          </Button>
        ) : (
          <Button theme="secondary" themeType="contained">
            Copy
          </Button>
        )}
      </CopyToClipboard>
    </>
  )
}
