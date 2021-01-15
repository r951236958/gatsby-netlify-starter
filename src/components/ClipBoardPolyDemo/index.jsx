import React from "react"
import PropTypes from "prop-types"
import * as clipboard from "clipboard-polyfill"

const dataShape = PropTypes.shape({
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
})

const propTypes = {
  component: PropTypes.elementType,
  data: PropTypes.oneOfType([dataShape, PropTypes.arrayOf(dataShape)]),
  onCopy: PropTypes.func,
  render: PropTypes.func,
  text: PropTypes.string,
}

const ClipBoardPolyDemo = ({
  children,
  component,
  data,
  onCopy,
  render,
  text,
  ...props
}) => {
  const _clipboard = new clipboard.DT()

  const copyText = text => clipboard.writeText(text).then(onCopy)

  const copyData = data => {
    if (Array.isArray(data)) {
      data.forEach(setData)
    } else {
      setData(data)
    }
    return clipboard.write(_clipboard).then(onCopy)
  }

  const setData = ({ type, value }) => _clipboard.setData(type, value)

  const clickHandler = () => {
    if (!(text || data || (Array.isArray(data) && data.length))) {
      throw new Error("Missing text or data and dataType prop.")
    }

    return text ? copyText(text) : copyData(data)
  }

  if (render) {
    return render({
      clipboard: _clipboard,
      copyData,
      copyText,
      data,
      text,
      ...props,
    })
  }

  if (component) {
    const Component = component
    return (
      <Component
        clipboard={_clipboard}
        copyText={copyText}
        copyData={copyData}
        data={data}
        text={text}
        {...props}
      />
    )
  }

  return (
    <div onClick={clickHandler} {...props}>
      {children}
    </div>
  )
}

ClipBoard.propTypes = propTypes

export default ClipBoardPolyDemo
