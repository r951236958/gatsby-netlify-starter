import React from "react"
//import { List, ListItem } from "@react-md/list"
import { DropdownMenu, MenuItemLink } from "@react-md/menu"
import { FontIcon } from "@react-md/icon"
//import navLinks from "./navLinks"

//import Container from "../Container"

const navLinks = [
  {
    leftAddon: <FontIcon>g_translate</FontIcon>,
    children: (
      <MenuItemLink
        href="https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN"
        target="_blank"
        rel="noreferrer"
      >
        翻譯
      </MenuItemLink>
    ),
  },
  {
    leftAddon: <FontIcon>insert_invitation</FontIcon>,
    children: (
      <MenuItemLink
        href="https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit?ouid=116808363677895581574&usp=sheets_home&ths=true"
        target="_blank"
        rel="noreferrer"
      >
        日報
      </MenuItemLink>
    ),
  },
  {
    leftAddon: <FontIcon>calculate</FontIcon>,
    children: (
      <MenuItemLink
        href="https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0"
        target="_blank"
        rel="noreferrer"
      >
        計算
      </MenuItemLink>
    ),
  },
  {
    leftAddon: <FontIcon>group_add</FontIcon>,
    children: (
      <MenuItemLink
        href="https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws/edit#gid=1653933803"
        target="_blank"
        rel="noreferrer"
      >
        共用
      </MenuItemLink>
    ),
  },
  {
    leftAddon: <FontIcon>folder_shared</FontIcon>,
    children: (
      <MenuItemLink
        href="https://docs.google.com/spreadsheets/d/1TBm2PKXAb9ihChkjfeFgtiCJ7wk8KV6K7NvM5_RkhoQ/edit#gid=0"
        target="_blank"
        rel="noreferrer"
      >
        其他
      </MenuItemLink>
    ),
  },
]

const LinkList = () => {
  return (
    <DropdownMenu
      id="dropdown-menu-nav"
      items={navLinks}
      buttonType="icon"
      aria-label="dropdown-menu-list"
    >
      <FontIcon>more_vert</FontIcon>
    </DropdownMenu>
  )
}

export default LinkList
