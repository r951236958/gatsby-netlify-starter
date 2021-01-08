import React from "react"
import { Text } from "@react-md/typography"
import UsingKeys from "./UsingKeys"
import styles from "./CustomSelect.module.scss"

const CustomSelect = () => {
  return (
    <div className={styles.container}>
      <Text type="headline-6" margin="none">
        Using Keys
      </Text>
      <UsingKeys />
    </div>
  )
}

export default CustomSelect
