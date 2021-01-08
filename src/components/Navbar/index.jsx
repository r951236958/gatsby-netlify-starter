import {
  AppBar,
  AppBarAction,
  AppBarNav,
  AppBarTitle,
  // APP_BAR_OFFSET_CLASSNAME,
  // APP_BAR_OFFSET_DENSE_CLASSNAME,
  // APP_BAR_OFFSET_PROMINENT_CLASSNAME,
  // APP_BAR_OFFSET_PROMINENT_DENSE_CLASSNAME,
} from "@react-md/app-bar"
//import { DropdownMenu } from "@react-md/menu"
import { FontIcon } from "@react-md/icon"
//import cn from "classnames"
//import { Link } from "gatsby"
//import { Text } from "@react-md/typography"
//import { FontIcon, SVGIcon } from "@react-md/icon"
import React from "react"
import DarkModeToggle from "../DarkModeToggle"
// import AppBarTitle from "./AppBarTitle"
import NavLink from "../NavLink"
import styles from "./Navbar.module.scss"

const Navbar = ({ height, menuLinks }) => {
  // Navbar in Layout can set height: `dense`, `prominent`, `prominent-dense`
  //const Navbar = ({ height, menuLinks }) => {
  //  const dense = height === "dense" || height === "prominent-dense"
  // const prominent = height === "prominent" || height === "prominent-dense"
  // const id = `fixed-with-offset${dense ? "-dense" : ""}${
  //   prominent ? "-prominent" : ""
  // }`

  // let title = !dense && !prominent ? "Normal" : ""
  // if (dense) {
  //   title = "Dense"
  // }

  // if (prominent) {
  //   title = `${title ? `${title} and ` : ""} Prominent`
  // }

  return (
    <AppBar id="simple-usage-app-bar-1" theme="primary" fixed height={height}>
      <AppBarNav id="simple-usage-nav-1" aria-label="Navigation">
        <FontIcon>menu</FontIcon>
      </AppBarNav>
      <AppBarTitle id="simple-usage-title-1" className={styles.titleIcon}>
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106 28"
            width="106"
            height="28"
          >
            <path
              fill="currentColor"
              d="M62.9 12h2.8v10h-2.8v-1.3c-1 1.5-2.3 1.6-3.1 1.6-3.1 0-5.1-2.4-5.1-5.3 0-3 2-5.3 4.9-5.3.8 0 2.3.1 3.2 1.6V12zm-5.2 5c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.6 0-2.8 1.2-2.8 2.8zm13.5-2.6V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4h-1.9zm8.5 0c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.8.3 2 .6 2.5 1.4.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.1-3 1.1c-2.1 0-3.2-1-3.9-1.7l1.5-1.7c.6.6 1.4 1.2 2.2 1.2.8 0 1.4-.4 1.4-1.1 0-.6-.5-.9-.9-1l-.6-.2c-.7-.3-1.5-.6-2.1-1.2-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1l-1.4 1.6zm6.1-1.1c1-1.4 2.4-1.6 3.2-1.6 2.9 0 4.9 2.3 4.9 5.3s-2 5.3-5 5.3c-.6 0-2.1-.1-3.2-1.6V22H83V5.2h2.8v8.1zm-.3 3.7c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.7 0-2.8 1.2-2.8 2.8zm13 3.5L93.7 12H97l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2l3.6-6.8zM54 13.7h-7v2.8h3.7c-.6 1.9-2 3.2-4.6 3.2-2.9 0-5-2.4-5-5.3S43.1 9 46 9c1.6 0 3.2.8 4.2 2.1l2.3-1.5C51 7.5 48.6 6.3 46 6.3c-4.4 0-8 3.6-8 8.1s3.4 8.1 8 8.1 8-3.6 8-8.1c.1-.3 0-.5 0-.7z"
            />
            <path
              fill="#fff"
              d="M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6 2.1 2.1 4.9 3.2 7.6 3.2L3 14.1z"
            />
            <path
              d="M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
              fill="#639"
            />
          </svg>
        </NavLink>
      </AppBarTitle>
      <AppBarAction id="a-toggle" first aria-label="darkMode-toggle">
        <DarkModeToggle />
      </AppBarAction>
      {menuLinks.map(link => (
        <AppBarAction
          key={link.name}
          id={link.name}
          aria-label="darkMode-toggle"
          className={styles.navLink}
        >
          <NavLink to={link.link}>{link.name}</NavLink>
        </AppBarAction>
      ))}

      <AppBarAction id="simple-usage-kebab-1" last aria-label="Actions">
        <FontIcon aria-label="more icon">more_vert</FontIcon>
      </AppBarAction>
    </AppBar>
  )
}

export default Navbar
