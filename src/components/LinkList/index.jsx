import React from "react"
import { Divider } from "@react-md/divider"
//import Link from "../Link"
import { Link } from "@react-md/link"
import cn from "classnames"
import { buttonThemeClassNames } from "@react-md/button"
import { List, ListItem } from "@react-md/list"
import Container from "./Container.jsx"
import mylist from "./mylist"

import styles from "./Container.module.scss"

const LinkStyledButton = ({
  className,
  theme,
  themeType,
  buttonType,
  disabled,
  children,
  ...props
}) => (
  <Link
    {...props}
    className={buttonThemeClassNames({
      disabled,
      theme,
      themeType,
      buttonType,
      className: cn(styles.link, className),
    })}
  >
    {children}
  </Link>
)

LinkStyledButton.defaultProps = {
  theme: "clear",
  themeType: "",
  buttonType: "text",
}

const LinkList = () => (
  <Container>
    <List>
      {mylist.map(({ name, link, icon }) => (
        <ListItem id={name} key={name} leftAddon={icon}>
          <LinkStyledButton href={link} target="_blank">
            {name}
          </LinkStyledButton>
          <Divider />
        </ListItem>
      ))}
    </List>
  </Container>
)

export default LinkList
