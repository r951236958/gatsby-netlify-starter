import React, { useState, useEffect } from "react"
import copy from "copy-to-clipboard"

const useClipboard = () => {
  const innerText = "Copy to clipboard"

  const [labelText, setLabelText] = useState(innerText)

  useEffect(() => {
    if (labelText === innerText) return

    const timer = setTimeout(() => setLabelText(initialInnerText), 2000)
    return () => clearTimeout(timer)
  }, [labelText])

  const handleCopy = () => {
    copy(text)
    setLabelText("Copied!")
    setTimeout(() => setLabelText(innerText), 2000)
  }

  return { labelText, handleCopy }
}

export default useClipboard
