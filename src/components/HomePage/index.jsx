import Highlight, { defaultProps } from "prism-react-renderer"
import Prism from "prismjs"
import PrismTheme from "prismjs/themes/prism-okaidia.css"
import React from "react"
import LinkList from "../LinkList"
import cn from "classnames"
import { Link as RouterLink } from "gatsby"
import { buttonThemeClassNames } from "@react-md/button"
//import GlobalStyle from "../GlobalStyle"
import Home from "../Home"

import styles from "./HomePage.module.scss"

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque."

const data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    text: lorem,
    bgColor: "#D5CAFA",
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    bgColor: "#EDA9A9",
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    text: lorem,
    bgColor: "#F2EE8D",
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    text: lorem,
    bgColor: "#9FEACD",
  },
]

const Link = ({
  className,
  theme,
  themeType,
  buttonType,
  disabled,
  children,
  ...props
}) => (
  <RouterLink
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
  </RouterLink>
)

const HomePage = () => {
  const code = `import React, { useEffect } from "react";

  export default function Code({ code, language }) {
    return (
      <div className="Code">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );`

  React.useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <>
      <Home boxData={data} />
      <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
      <h1>
        Hey people{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>Welcome to your new Gatsby website. You are on your home page.</p>
      <p>
        This starter comes out of the box with styled components and Gatsby's
        default starter blog running on Netlify CMS.
      </p>
      <p>Now go build something great!</p>
      <Highlight
        Prism={Prism}
        theme={PrismTheme}
        {...defaultProps}
        code={code}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={PrismTheme}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      <Link
        theme="secondary"
        themeType="contained"
        to="/blog/"
        style={{ marginTop: "85px" }}
      >
        Go to Blog
      </Link>
      <LinkList />
    </>
  )
}

export default HomePage
