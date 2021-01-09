import React from "react"
import { Text } from "@react-md/typography"
import { TextField } from "@react-md/form"
import { Button } from "@react-md/button"
import { FontIcon } from "@react-md/icon"
import styled from "styled-components"
import CopyToClipboard from "@uxui/copy-to-clipboard-react"

import styles from "./ClipBoardDemo.module.scss"

const Pane = styled("div")({
  padding: "1rem 2rem 1rem 1rem",
  backgroundColor: "var(--bg)",
  borderRadius: "5px",
  border: "1px solid var(--border-color)",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  fontFamily: "sans-serif",
  fontSize: "16px",
})

const Container = styled("div")({
  maxWidth: "360px",
  margin: "100px auto",
})

const Tooltip = styled("div")({
  backgroundColor: "#111111",
  color: "#ffffff",
  position: "absolute",
  top: "-25px",
  right: "-10px",
  fontWeight: 600,
  fontSize: "12px",
  padding: "4px 5px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    border: "5px solid transparent",
    borderTopColor: "#111111",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
  },
})

const ClipBoardDemo = () => {
  const [items, setItems] = React.useState([])
  const [itemName, setItemName] = React.useState("")

  const addItem = event => {
    event.preventDefault()
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
      },
    ])
    setItemName("")
  }
  return (
    <div className={styles.Container}>
      <Text type="headline-6" margin="top">
        sconsults
      </Text>
      <Pane>
        <TextField
          name="item"
          type="text"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        >
          {itemName}
        </TextField>
      </Pane>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ClipBoardDemo
