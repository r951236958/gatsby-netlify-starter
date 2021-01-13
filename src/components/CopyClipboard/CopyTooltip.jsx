import React from "react"
import styled from "styled-components"

const Tooltip = styled("div")({
  backgroundColor: "rgba(17 17 17 0.7",
  color: "#ffffff",
  position: "absolute",
  top: "-1.5rem",
  right: "0.5rem",
  fontWeight: 600,
  fontSize: "12px",
  padding: "4px 6px",
  orderRadius: "0.5rem",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    border: "5px solid transparent",
    borderTopColor: "#111111",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
  },
})

const CopyTooltip = () => {
  return (
    <Tooltip role="tooltip" aria-describedby="copied ETH address!">
      Copied
    </Tooltip>
  )
}

export default CopyTooltip
