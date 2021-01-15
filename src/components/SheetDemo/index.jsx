import React from "react"
import { Button } from "@react-md/button"
import { List, ListItem } from "@react-md/list"
import { Sheet } from "@react-md/sheet"
import { useToggle } from "@react-md/utils"

//const positions = ["top", "right", "bottom", "left"]

const SheetDemo = () => {
  const [visible, show, hide] = useToggle(false)

  return (
    <>
      <Button
        id="show-sheet-position"
        onClick={show}
        theme="secondary"
        themeType="contained"
      >
        Show
      </Button>
      <Sheet
        id="example-sheet-1"
        aria-label="Example Sheet"
        visible={visible}
        onRequestClose={hide}
        position="left"
      >
        <List onClick={hide}>
          <ListItem id="example-sheet-item-1">Item 1</ListItem>
          <ListItem id="example-sheet-item-2">Item 2</ListItem>
          <ListItem id="example-sheet-item-3">Item 3</ListItem>
          <ListItem id="example-sheet-item-4">Item 4</ListItem>
          <ListItem id="example-sheet-item-5">Item 5</ListItem>
        </List>
      </Sheet>
    </>
  )
}

export default SheetDemo
