import React from "react"

import {
  ArrowDropDownSVGIcon,
  HomeSVGIcon,
  InfoOutlineSVGIcon,
  MoreVertSVGIcon,
} from "@react-md/material-icons"
import { DropdownMenu, MenuItem, MenuItemLink } from "@react-md/menu"

const items = [
  "Item 1",
  null,
  0,
  1,
  "separator",
  { children: "Item 2" },
  { role: "separator", inset: true },
  { rightAddon: <HomeSVGIcon />, children: "Home" },
  { leftAddon: <InfoOutlineSVGIcon />, children: <span>Custom content</span> },
  { href: "#", children: "Link" },
  <MenuItem>Custom item</MenuItem>,
  <MenuItemLink href="#">Link</MenuItemLink>,
]

const DrawerMenu = () => {
  return (
    <>
      <DropdownMenu
        id="dropdown-menu-2"
        items={items}
        buttonType="icon"
        aria-label="Options..."
      >
        <MoreVertSVGIcon />
      </DropdownMenu>
    </>
  )
}

export default DrawerMenu
