import React from "react"
import { render } from "react-dom"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

export const Code = ({ codeString, children, language, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false)

  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={dracula}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: "2rem",
              position: "relative",
            }}
          >
            <Button
              onClick={() => {
                copyToClipboard(codeString)
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
            >
              {isCopied ? "🎉 Copied!" : "Copy"}
            </Button>

            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} style={style}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}
