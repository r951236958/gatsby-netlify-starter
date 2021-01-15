import { Button } from "@react-md/button"
import React from "react"
import ReactClipboard from "react-clipboardjs-copy"

const ReactClipboardDemo = () => {
  if (typeof window === "undefined") return null

  return (
    <>
      <div>
        <section className="app-item">
          <div className="app-item-desc">copy text</div>
          <ReactClipboard
            text="copy text"
            onSuccess={e => console.log(e)}
            onError={e => console.log(e)}
          >
            <Button theme="secondary" themeType="contained">
              Copy
            </Button>
          </ReactClipboard>
        </section>
        <section className="app-item">
          <div className="app-item-desc">
            copy element attr value: aria-label='this is an element attr
            aria-label'
          </div>
          <ReactClipboard
            options={{
              text: trigger => {
                return trigger.getAttribute("aria-label")
              },
            }}
            aria-label="this is an element attr aria-label"
          >
            <Button themeType="contained">Copy</Button>
          </ReactClipboard>
        </section>

        <section className="app-item">
          <div className="app-item-desc">
            changes the focus you'll want to set the focused element as the
            container value
          </div>
          <ReactClipboard
            options={{
              container: document.getElementById("modal"),
            }}
          >
            <Button theme="secondary" themeType="contained">
              Copy
            </Button>
          </ReactClipboard>
        </section>

        <section className="app-item">
          <div className="app-item-desc">
            <div id="dynamically_id">
              this is a dynamically target element, click copy button
            </div>
          </div>
          <ReactClipboard
            options={{
              target: trigger => {
                return document.getElementById("dynamically_id")
              },
            }}
          >
            <Button theme="secondary" themeType="contained">
              Copy
            </Button>
          </ReactClipboard>
        </section>
      </div>
    </>
  )
}

export default ReactClipboardDemo
