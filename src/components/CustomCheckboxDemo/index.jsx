import React from "react"
import { Divider } from "@react-md/divider"
import { Checkbox, Form, useChecked } from "@react-md/form"
import SunnySVGIcon from "./SunnySVGIcon"
import BrightnessSVGIcon from "./BrightnessSVGIcon"

import styles from "./CustomCheckboxes.module.scss"

const CustomCheckbox = ({
  defaultChecked = false,
  onChange: propOnChange,
  ...props
}) => {
  const [checked, onChange] = useChecked(defaultChecked, propOnChange)

  return (
    <Checkbox
      {...props}
      checked={checked}
      onChange={onChange}
      icon={
        checked ? (
          <SunnySVGIcon style={{ color: "var(--darkToggle)" }} />
        ) : (
          <BrightnessSVGIcon style={{ color: "var(--lightToggle)" }} />
        )
      }
      disableIconOverlay
    />
  )
}

const CustomCheckboxDemo = () => (
  <Form>
    <CustomCheckbox
      id="custom-checkbox-1"
      name="custom-checkbox"
      label="Checkbox 1"
    />
    <CustomCheckbox
      id="custom-checkbox-2"
      name="custom-checkbox"
      label="Checkbox 2"
      defaultChecked
    />
    <CustomCheckbox
      id="custom-checkbox-3"
      name="custom-checkbox"
      label="Checkbox 3"
      disabled
    />
    <CustomCheckbox
      id="custom-checkbox-4"
      name="custom-checkbox"
      label="Checkbox 4"
      disabled
      defaultChecked
    />
    <Divider />
    <Checkbox
      id="custom-checkbox-5"
      label="Super Small"
      name="custom-checkbox"
      className={styles.small}
    />
    <Checkbox
      id="custom-checkbox-6"
      label="Super Large"
      name="custom-checkbox"
      className={styles.large}
    />
  </Form>
)

export default CustomCheckboxDemo
