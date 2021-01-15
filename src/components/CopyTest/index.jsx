import { Button } from "@react-md/button"
import {
  Checkbox,
  Fieldset,
  Form,
  Radio,
  Select,
  TextField,
  useChoice,
  useChecked,
} from "@react-md/form"
import { FontIcon } from "@react-md/icon"
import { Grid } from "@react-md/utils"
import { upperFirst } from "lodash"
import React, { useCallback, useState } from "react"
import ReactClipboard from "react-clipboardjs-copy"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ReactTooltip from "react-tooltip"
//import { Button } from "@react-md/button"
import styled from "styled-components"
//import FormSelect from "../FormSelect"
//import Button from "../Button"

const options = ["16.8.0", "16.7.0", "16.6.0", "16.5.0"]

const FAVORITE_VERSION = ["v-16.8", "v-16.7", "v-16.6", "v-16.5"]

const FAVORITE_VERSION_OPTIONS = FAVORITE_VERSION.map(type => ({
  name: type
    .split("-")
    .map(upperFirst)
    .join(" "),
  value: type,
}))

const isVersionValue = value => FAVORITE_VERSION.includes(value)

const VERSION_POSITIONS = ["top", "middle", "bottom"]

const isVersionPosition = value => VERSION_POSITIONS.includes(value)

const Copied = styled("span")({
  color: "red",
  margin: "auto 1rem",
})

const GridWrapper = styled.section`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: minmax(0, 1fr);
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

const CopyTest = ({
  leftAddon,
  setLeftAddon,
  leftAddonPosition,
  setLeftAddonPosition,
  rightAddon,
  setRightAddon,
  rightAddonPosition,
  setRightAddonPosition,
}) => {
  if (typeof window === "undefined") return null
  const [inputValue, setInputValue] = useState({
    valueA: "nick.l@sconsults.net",
    valueB: "nick.l@auxworld.net",
  })
  const [version, handleVersionChange] = useChoice("auto")
  const [copied, setCopied] = useState(false)
  const [value, setValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
  //const [copyTimeOut, setCopyTimeout] = useState(0)
  //const [count, setCount] = useState(0)
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    hooks: true,
    level: "master",
    version: "16.5",
  })

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }
  const onChange = event => {
    setValue(event.target.value)
  }

  const onCopy = () => {
    setCopied(true)
  }

  const copyValue = event => {
    setInputValue(event.target.value)
  }

  const handleSelectChange = useCallback((nextValue, _option) => {
    setSelectValue(nextValue)
  }, [])

  const [disableMovementChange, handleMovementChange] = useChecked(false)

  return (
    <>
      <div>
        <GridWrapper>
          <Button theme="secondary" buttonType="icon">
            {copied ? (
              <FontIcon>check_box</FontIcon>
            ) : (
              <FontIcon>check_box_outline_blank</FontIcon>
            )}
          </Button>
          {copied ? <Copied>Copied!</Copied> : null}
        </GridWrapper>
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
          <CopyToClipboard
            text={copyValue.valueA}
            onCopy={() => setCopied(true)}
          >
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
            <Button theme="secondary" themeType="contained">
              Copy
            </Button>
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
            <Button themeType="contained">Copy</Button>
          </ReactClipboard>
        </section>

        <section className="app-item">
          <div className="app-item-desc">
            changes the focus you'll want to set the focused element as the
            container value
          </div>
          <ReactClipboard
            options={{
              container: document.getElementById("modal"),
            }}
          >
            <Button theme="secondary" themeType="contained">
              Copy
            </Button>
          </ReactClipboard>
        </section>

        <section className="app-item">
          <div className="app-item-desc">
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
            <Button theme="secondary" themeType="contained">
              Copy
            </Button>
          </ReactClipboard>
        </section>
      </div>
    </>
  )
}

export default CopyTest
