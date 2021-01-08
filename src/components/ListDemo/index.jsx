import React from "react"
import { Divider } from "@react-md/divider"
import Link from "../Link"
//import { Link as RouterLink } from "gatsby"
//import { Link as ReactMDLink } from "@react-md/link"
import { List, ListItem } from "@react-md/list"
import {
  FavoriteSVGIcon,
  BookSVGIcon,
  TvSVGIcon,
  AddSVGIcon,
  TocSVGIcon,
  AdbSVGIcon,
} from "@react-md/material-icons"

import Container from "./Container.jsx"
import mylist from "./mylist"

const ListDemo = () => (
  <Container>
    <List>
      <ListItem id="list1-item-0">First Item</ListItem>
      <ListItem id="list1-item-1">Second Item</ListItem>
      <ListItem id="list1-item-2">Third Item</ListItem>
      <ListItem id="list1-item-3">Fourth Item</ListItem>
      <Divider />
      <ListItem id="list1-item-4">Fifth Item</ListItem>
      <ListItem id="list1-item-5">Sixth Item</ListItem>
    </List>
    <List>
      <ListItem id="list2-item-0" leftAddon={<FavoriteSVGIcon />}>
        First Item
      </ListItem>
      <ListItem id="list2-item-1" leftAddon={<BookSVGIcon />}>
        <Link to="/" theme="secondary" themeType="contained">
          Second Item
        </Link>
      </ListItem>
      <ListItem id="list2-item-2" leftAddon={<TvSVGIcon />}>
        Third Item
      </ListItem>
      <ListItem id="list2-item-3" leftAddon={<AddSVGIcon />}>
        Fourth Item
      </ListItem>
      <Divider inset />
      <ListItem id="list2-item-4" leftAddon={<TocSVGIcon />}>
        Fifth Item
      </ListItem>
      <ListItem id="list2-item-5" leftAddon={<AdbSVGIcon />}>
        Sixth Item
      </ListItem>
    </List>

    <List>
      {mylist.map(({ name, link, icon }) => (
        <ListItem id={name} key={name} leftAddon={icon}>
          <Link to={link} target="_blank" rel="noreferrer">
            {name}
          </Link>
        </ListItem>
      ))}
    </List>
  </Container>
)

export default ListDemo
