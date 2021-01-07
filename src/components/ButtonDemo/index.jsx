import React from "react"
import { Button } from "@react-md/button"
import { FontIcon, TextIconSpacing } from "@react-md/icon"
import {
  ChatSVGIcon,
  DoneSVGIcon,
  SaveSVGIcon,
  Brightness4FontIcon,
  WbSunnyFontIcon,
  Brightness4SVGIcon,
  WbSunnySVGIcon,
  DeleteSVGIcon,
  FavoriteSVGIcon,
} from "@react-md/material-icons"

import Container from "../Container"

const ButtonDemo = () => (
  <>
    <Container>
      <Button id="text-button-1" theme="primary">
        Text Button 1
      </Button>
      <Button id="text-button-2" theme="secondary">
        Text Button 2
      </Button>
      <Button id="text-button-3" theme="warning">
        Text Button 3
      </Button>
      <Button id="text-button-4" theme="error">
        Text Button 4
      </Button>
      <Button id="text-button-5" theme="clear">
        Text Button 5
      </Button>
      <Button id="text-button-6" disabled>
        Disabled Text Button
      </Button>
    </Container>

    <Container>
      <Button id="outlined-button-1" theme="primary" themeType="outline">
        Outlined Button 1
      </Button>
      <Button id="outlined-button-2" theme="secondary" themeType="outline">
        Outlined Button 2
      </Button>
      <Button id="outlined-button-3" theme="warning" themeType="outline">
        Outlined Button 3
      </Button>
      <Button id="outlined-button-4" theme="error" themeType="outline">
        Outlined Button 4
      </Button>
      <Button id="outlined-button-5" theme="clear" themeType="outline">
        Outlined Button 5
      </Button>
      <Button id="outlined-button-6" themeType="outline" disabled>
        Disabled Outlined Button
      </Button>
    </Container>

    <Container>
      <Button id="contained-button-1" theme="primary" themeType="contained">
        Contained Button 1
      </Button>
      <Button id="contained-button-2" theme="secondary" themeType="contained">
        Contained Button 2
      </Button>
      <Button id="contained-button-3" theme="warning" themeType="contained">
        Contained Button 3
      </Button>
      <Button id="contained-button-4" theme="error" themeType="contained">
        Contained Button 4
      </Button>
      <Button id="contained-button-5" theme="clear" themeType="contained">
        Contained Button 5
      </Button>
      <Button id="contained-button-6" themeType="contained" disabled>
        Disabled Contained Button
      </Button>
    </Container>

    <Container>
      <Button
        id="icon-button-1"
        buttonType="icon"
        theme="primary"
        aria-label="Favorite"
      >
        <FontIcon>favorite</FontIcon>
      </Button>
      <Button
        id="icon-button-2"
        buttonType="icon"
        theme="secondary"
        aria-label="Favorite"
      >
        <FavoriteSVGIcon />
      </Button>
      <Button
        id="icon-button-3"
        buttonType="icon"
        theme="warning"
        aria-label="Move to Trash"
      >
        <DeleteSVGIcon />
      </Button>
      <Button
        id="icon-button-4"
        buttonType="icon"
        theme="error"
        aria-label="Permanently Delete"
      >
        <DeleteSVGIcon />
      </Button>
      <Button
        id="icon-button-5"
        buttonType="icon"
        theme="clear"
        aria-label="Add"
      >
        <FontIcon>add</FontIcon>
      </Button>
      <Button
        id="icon-button-6"
        buttonType="icon"
        disabled
        aria-label="Disabled Add Button"
      >
        <FontIcon>add</FontIcon>
      </Button>
      <Button
        id="icon-button-7"
        buttonType="icon"
        theme="primary"
        themeType="outline"
        aria-label="Favorite"
      >
        <FontIcon>favorite</FontIcon>
      </Button>
      <Button
        id="icon-button-8"
        buttonType="icon"
        theme="secondary"
        themeType="outline"
        aria-label="Favorite"
      >
        <FavoriteSVGIcon />
      </Button>
      <Button
        id="icon-button-9"
        buttonType="icon"
        theme="warning"
        themeType="contained"
        aria-label="Move to Trash"
      >
        <DeleteSVGIcon />
      </Button>
      <Button
        id="icon-button-10"
        buttonType="icon"
        theme="error"
        themeType="contained"
        aria-label="Permanently Delete"
      >
        <DeleteSVGIcon />
      </Button>
      <Button
        id="icon-button-11"
        buttonType="icon"
        theme="clear"
        themeType="outline"
        aria-label="Add"
      >
        <FontIcon>add</FontIcon>
      </Button>
      <Button
        id="icon-button-12"
        buttonType="icon"
        disabled
        aria-label="Disabled Add Button"
        themeType="outline"
      >
        <FontIcon>add</FontIcon>
      </Button>
    </Container>

    <Container>
      <Button id="combined-button-1">
        <TextIconSpacing icon={<FontIcon>favorite</FontIcon>}>
          Favorite
        </TextIconSpacing>
      </Button>
      <Button id="combined-button-2" theme="secondary" themeType="outline">
        <TextIconSpacing icon={<ChatSVGIcon />} iconAfter>
          Messages
        </TextIconSpacing>
      </Button>
      <Button id="combined-button-3" theme="warning" themeType="contained">
        <TextIconSpacing icon={<DoneSVGIcon />}>Done</TextIconSpacing>
      </Button>
      <Button id="combined-button-4" theme="error" themeType="contained">
        <TextIconSpacing icon={<DoneSVGIcon />}>
          <TextIconSpacing icon={<DeleteSVGIcon />} iconAfter>
            Delete Forever
          </TextIconSpacing>
        </TextIconSpacing>
      </Button>
      <Button id="combined-button-5" theme="clear" themeType="outline">
        <TextIconSpacing icon={<SaveSVGIcon />}>Save</TextIconSpacing>
      </Button>
      <Button id="combined-button-6" theme="error" themeType="outline" disabled>
        <TextIconSpacing icon={<SaveSVGIcon />}>Save</TextIconSpacing>
      </Button>
    </Container>

    <Container>
      <Button buttonType="icon" theme="secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path
            fillRule="evenodd"
            d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z"
          />
        </svg>
      </Button>
      <Button
        id="icon-button-8"
        buttonType="icon"
        theme="secondary"
        themeType="outline"
        aria-label="lightMode-Toggler"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
        </svg>
      </Button>
      <Button buttonType="icon" theme="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path d="M22.6 11.29L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 00-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 000 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6c.39-.39.39-1.03 0-1.42zm-4.68 1.69a5.997 5.997 0 01-3.88 4.66c-1.21.43-2.41.45-3.5.18-.41-.1-.48-.65-.13-.9C11.98 15.84 13 14.04 13 12s-1.02-3.84-2.58-4.92c-.35-.24-.29-.79.13-.9 1.09-.27 2.29-.25 3.5.18 2.02.72 3.54 2.54 3.88 4.66.05.33.07.66.07.98-.01.32-.03.65-.08.98z" />
        </svg>
      </Button>
      <Button
        id="icon-button-7"
        buttonType="icon"
        theme="primary"
        themeType="outline"
        aria-label="darktMode-Toggler"
      >
        <Brightness4FontIcon />
      </Button>
      <Button
        id="icon-button-7"
        buttonType="icon"
        theme="primary"
        themeType="outline"
        aria-label="darktMode-Toggler"
      >
        <Brightness4SVGIcon />
      </Button>
      <Button
        id="icon-button-8"
        buttonType="icon"
        theme="secondary"
        themeType="outline"
        aria-label="lightMode-Toggler"
      >
        <WbSunnyFontIcon />
      </Button>
      <Button
        id="icon-button-8"
        buttonType="icon"
        theme="secondary"
        themeType="outline"
        aria-label="lightMode-Toggler"
      >
        <WbSunnySVGIcon />
      </Button>
    </Container>
  </>
)

export default ButtonDemo
