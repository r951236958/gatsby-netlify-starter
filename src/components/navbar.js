import React from "react"
import { AppBar, AppBarNav, AppBarTitle, AppBarAction } from "@react-md/app-bar"
import {
  MenuSVGIcon,
  SearchSVGIcon,
  MoreVertSVGIcon,
} from "@react-md/material-icons"
import DrawerMenu from "./drawermenu"

const Navbar = () => {
  return (
    <>
      <AppBar id="simple-usage-app-bar-1" theme="default">
        <AppBarNav id="simple-usage-nav-1" aria-label="Navigation">
          <MenuSVGIcon />
        </AppBarNav>
        <AppBarTitle
          id="simple-usage-title-1"
          className="rmd-typography--capitalize"
        >
          Gatsby Starter
        </AppBarTitle>
        <AppBarAction id="simple-usage-search-1" first aria-label="Search">
          <SearchSVGIcon />
        </AppBarAction>
        <AppBarAction id="simple-usage-kebab-1" last aria-label="Actions">
          <DrawerMenu />
        </AppBarAction>
      </AppBar>
    </>
  )
}

export default Navbar
