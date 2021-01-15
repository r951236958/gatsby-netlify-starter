import React, { useCallback, useState } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import Prism from "prismjs"
import PrismTheme from "prismjs/themes/prism-okaidia.css"
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
import ReactClipboard from "react-clipboardjs-copy"
import { CopyToClipboard } from "react-copy-to-clipboard"
import ReactTooltip from "react-tooltip"
import styled from "styled-components"
import TextFieldThemeConfig from "./TextFieldThemeConfig"

//const options = Array.from({ length: 8 }, (_, i) => `Option ${i + 1}`)
//const options = ["16.8.0", "16.7.0", "16.6.0", "16.5.0"]

const versions = ["16.8.0", "16.7.0", "16.6.0", "16.5.0"]

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

const FormSelect = ({
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
  const [value, setValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
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

  const handleSelectChange = useCallback((nextValue, _option) => {
    setSelectValue(nextValue)
  }, [])

  const [disableMovementChange, handleMovementChange] = useChecked(false)

  return (
    <>
      <div>
        <GridWrapper>
          <Form>
            <div>Input Value: {value}</div>
            <Grid columns={1}>
              <TextField
                value={value}
                label="Label"
                placeholder="輸入文字"
                onChange={onChange}
              />
              <TextField
                value={state.firstName}
                label="First Name"
                name="firstName"
                onChange={handleChange}
              />
              <TextField
                value={state.lastName}
                label="Last Name"
                name="lastName"
                onChange={handleChange}
              />
              <TextField
                value={state.bio}
                label="Bio"
                name="bio"
                onChange={handleChange}
              />
            </Grid>
            <Checkbox
              id="check-box-hooks"
              label="With hooks"
              name="hooks"
              checked={state.hooks}
              onChange={handleChange}
            />

            <Fieldset legend="Text field options">
              <Radio
                id="radio-level-acolyte"
                name="level"
                value="acolyte"
                checked={state.level === "acolyte"}
                onChange={handleChange}
                label="Acolyte"
              />
              <Radio
                id="radio-level-master"
                name="level"
                value="master"
                checked={state.level === "master"}
                onChange={handleChange}
                label="Master"
              />
              <Fieldset legend="Favorite version">
                <Grid columns={2} phoneColumns={1}>
                  <Select
                    label="Version"
                    id="custom-select-1"
                    options={versions}
                    value={selectValue}
                    onChange={handleSelectChange}
                    disableMovementChange={disableMovementChange}
                  />
                </Grid>
              </Fieldset>
              <Fieldset legend="Left Addon Behavior">
                <Grid columns={2} phoneColumns={1}>
                  <Select
                    id="configurable-left-addon"
                    name="leftAddon"
                    label="Left Addon"
                    labelKey="name"
                    valueKey="value"
                    value={leftAddon}
                    onChange={nextValue => {
                      if (isVersionValue(nextValue)) {
                        setLeftAddon(nextValue)
                      }
                    }}
                    options={FAVORITE_VERSION_OPTIONS}
                  />
                  <Select
                    id="configurable-left-addon-position"
                    name="leftAddonPosition"
                    label="Left Addon Position"
                    value={leftAddonPosition}
                    onChange={nextValue => {
                      if (isVersionPosition(nextValue)) {
                        setLeftAddonPosition(nextValue)
                      }
                    }}
                    options={VERSION_POSITIONS}
                  />
                </Grid>
              </Fieldset>
              <Fieldset legend="Right Addon Behavior">
                <Grid columns={2} phoneColumns={1}>
                  <Select
                    id="configurable-right-addon"
                    name="rightAddon"
                    label="Right Addon"
                    labelKey="name"
                    valueKey="value"
                    value={rightAddon}
                    onChange={nextValue => {
                      if (isVersionValue(nextValue)) {
                        setRightAddon(nextValue)
                      }
                    }}
                    options={FAVORITE_VERSION_OPTIONS}
                  />
                  <Select
                    id="configurable-right-addon-position"
                    name="rightAddonPosition"
                    label="Right Addon Position"
                    value={rightAddonPosition}
                    onChange={nextValue => {
                      if (isVersionPosition(nextValue)) {
                        setRightAddonPosition(nextValue)
                      }
                    }}
                    options={VERSION_POSITIONS}
                  />
                </Grid>
              </Fieldset>
            </Fieldset>
          </Form>
          <Highlight
            Prism={Prism}
            theme={PrismTheme}
            {...defaultProps}
            code={JSON.stringify(state, null, 2)}
            language="json"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={PrismTheme}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </GridWrapper>
      </div>
    </>
  )
}

export default FormSelect
