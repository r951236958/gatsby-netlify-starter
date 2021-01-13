import React, { useCallback, useState } from "react"
import { Checkbox, Fieldset, Select, useChecked } from "@react-md/form"

import TextFieldThemeConfig from "./TextFieldThemeConfig"

//const options = Array.from({ length: 8 }, (_, i) => `Option ${i + 1}`)
const options = ["16.8.0", "16.7.0", "16.6.0", "16.5.0"]

const FormSelect = () => {
  const [value, setValue] = useState("")
  const handleChange = useCallback((nextValue, _option) => {
    setValue(nextValue)
  }, [])

  const [disableMovementChange, handleMovementChange] = useChecked(false)

  return (
    <TextFieldThemeConfig
      idPrefix="custom-select"
      disableRightIcon
      renderField={({ rightChildren: _rightChildren, ...props }) => (
        <Select
          {...props}
          label="Version"
          id="custom-select-1"
          options={options}
          value={value}
          onChange={handleChange}
          disableMovementChange={disableMovementChange}
        />
      )}
    ></TextFieldThemeConfig>
  )
}

export default FormSelect
