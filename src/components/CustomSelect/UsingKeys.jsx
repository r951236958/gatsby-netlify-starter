import React from "react"
import { Select } from "@react-md/form"

import immutableStates from "./states"
import useSelect from "./useSelect"

const states = immutableStates.slice()

const UsingKeys = () => {
  const [value, handleChange] = useSelect("")
  return (
    <Select
      id="select-using-keys"
      label="State"
      placeholder="Colorado"
      labelKey="name"
      valueKey="abbreviation"
      options={states}
      value={value}
      onChange={handleChange}
    />
  )
}

export default UsingKeys
