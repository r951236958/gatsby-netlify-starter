import React from "react"
import { Divider } from "@react-md/divider"
//import Link from "../Link"
import { Link as RMDRouter } from "@react-md/link"
import { Link as RouterLink } from "gatsby"
import cn from "classnames"
import { buttonThemeClassNames } from "@react-md/button"
import { MenuItemLink } from "@react-md/menu"
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

const LinkList = () => {
  const MenuLink = props => <MenuItemLink {...props} component={RouterLink} />
  return (
    <Container>
      <List>
        {mylist.map(({ name, link, icon }) => (
          <ListItem id={name} key={name} leftAddon={icon}>
            <MenuLink href={link} target="_blank">
              {name}
            </MenuLink>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
export default LinkList
