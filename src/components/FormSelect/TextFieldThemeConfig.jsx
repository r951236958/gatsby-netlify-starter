import React from "react"
import {
  Checkbox,
  Fieldset,
  Form,
  Radio,
  FormThemeProvider,
  useChecked,
  useChoice,
  Select,
  useSelectState,
} from "@react-md/form"
import { FavoriteSVGIcon, LocationOnSVGIcon } from "@react-md/material-icons"

import styles from "./TextFieldThemeConfig.module.scss"

const themes = ["none", "underline", "filled", "outline"]

/**
 * This is a small higher-order-component that will provide the themeable props
 * to either a `TextField` or `TextArea` for the two configurable examples.
 */
const TextFieldThemeConfig = ({
  idPrefix,
  children,
  renderField,
  disableDense,
  disableRightIcon,
}) => {
  const [useLeft, handleLeftChange, setLeftIcon] = useChecked(false)
  const [useRight, handleRightChange, setRightIcon] = useChecked(false)
  const [dense, handleDenseChange, setDense] = useChecked(false)
  const [label, handleLabelChange, setLabel] = useChecked(true)
  const [inline, handleInlineChange] = useChecked(false)
  const [readOnly, handleReadOnlyChange, setReadOnly] = useChecked(false)
  const [error, handleErrorChange, setError] = useChecked(false)
  const [disabled, handleDisabledChange] = useChecked(false)
  const [underlineDirection, setUnderlineDirection] = useSelectState("left")
  const [currentTheme, handleThemeChange] = useChoice("outline", event => {
    // the "unstyled" state does not support icons and a label out of the box
    // and requires additional styling instead
    if (event.currentTarget.value === "none") {
      setLeftIcon(false)
      setRightIcon(false)
      setLabel(false)
    } else if (!label) {
      setLabel(true)
    }
  })

  const isUnstyled = currentTheme === "none"
  if (disabled && error) {
    setError(false)
  }

  if (disabled && readOnly) {
    setReadOnly(false)
  }

  if (disableDense && dense) {
    setDense(false)
  }

  if (disableRightIcon && useRight) {
    setRightIcon(false)
  }

  return (
    <Form className={styles.container}>
      {children}
      <div className={styles.demo}>
        <FormThemeProvider
          theme={currentTheme}
          underlineDirection={underlineDirection}
        >
          {renderField({
            dense,
            inline,
            readOnly,
            disabled,
            error,
            leftChildren: useLeft && <FavoriteSVGIcon />,
            rightChildren: useRight && <LocationOnSVGIcon />,
          })}
        </FormThemeProvider>
      </div>
    </Form>
  )
}

export default TextFieldThemeConfig
