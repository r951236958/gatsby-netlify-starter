import React, { useState } from "react"
import { Avatar } from "@react-md/avatar"
import { List, ListItem } from "@react-md/list"
import { InfoSVGIcon, StyleSVGIcon } from "@react-md/material-icons"

import ConfigurationForm from "./ConfigurationForm"

const LEFT_LOOKUPS = {
  none: null,
  icon: <StyleSVGIcon />,
  avatar: <Avatar src="https://picsum.photos/40/40?image=123" />,
  media: <img src="https://picsum.photos/56?image=700" alt="" />,
  "large-media": <img src="https://picsum.photos/100/56?image=800" alt="" />,
}

const RIGHT_LOOKUPS = {
  none: null,
  icon: <InfoSVGIcon />,
  avatar: <Avatar>A</Avatar>,
  media: <img src="https://picsum.photos/56?image=901" alt="" />,
  "large-media": <img src="https://picsum.photos/100/56?image=203" alt="" />,
}

export default function ConfigurableDemo() {
  const [disabled, setDisabled] = useState(false)
  const [disabledOpacity, setDisabledOpacity] = useState(false)
  const [leftAddon, setLeftAddon] = useState("none")
  const [leftAddonPosition, setLeftAddonPosition] = useState("middle")
  const [rightAddonPosition, setRightAddonPosition] = useState("middle")
  const [rightAddon, setRightAddon] = useState("none")
  const [primaryText, setPrimaryText] = useState("Hello, world!")
  const [secondaryText, setSecondaryText] = useState("")
  const [threeLines, setThreeLines] = useState(false)

  return (
    <>
      <List>
        <ListItem
          disabled={disabled}
          disabledOpacity={disabledOpacity}
          leftAddon={LEFT_LOOKUPS[leftAddon]}
          leftAddonType={leftAddon === "none" ? undefined : leftAddon}
          leftAddonPosition={leftAddonPosition}
          rightAddon={RIGHT_LOOKUPS[rightAddon]}
          rightAddonType={rightAddon === "none" ? undefined : rightAddon}
          rightAddonPosition={rightAddonPosition}
          primaryText={primaryText}
          secondaryText={secondaryText}
          threeLines={threeLines}
        />
      </List>
      <ConfigurationForm
        disabled={disabled}
        setDisabled={setDisabled}
        disabledOpacity={disabledOpacity}
        setDisabledOpacity={setDisabledOpacity}
        primaryText={primaryText}
        setPrimaryText={setPrimaryText}
        secondaryText={secondaryText}
        setSecondaryText={setSecondaryText}
        threeLines={threeLines}
        setThreeLines={setThreeLines}
        leftAddon={leftAddon}
        setLeftAddon={setLeftAddon}
        leftAddonPosition={leftAddonPosition}
        setLeftAddonPosition={setLeftAddonPosition}
        rightAddon={rightAddon}
        setRightAddon={setRightAddon}
        rightAddonPosition={rightAddonPosition}
        setRightAddonPosition={setRightAddonPosition}
      />
    </>
  )
}
